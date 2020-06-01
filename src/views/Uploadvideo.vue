<template>
  <div class="container">
      <h3>Upload Video:</h3>
      <input type="file" @change="previewImage" accept="video/*" />
      <span>
        Progress: {{uploadValue.toFixed()+"%"}}
        <progress
          id="progress"
          :value="uploadValue"
          max="100"
        ></progress>
      </span>
    <div v-if="videoData!=null">
      <button @click="onUpload">Upload</button>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";

export default {
  name: "Upload",
  data() {
    return {
     loginUser:localStorage.getItem('login_user_name'),
      videoData: null,
      video: null,
      uploadValue: 0
    };
  },
  created(){
   if(!localStorage.getItem('login_user_email')){
   this.$router.push('Login');
   }
  },
  methods: {
    previewImage(event) {
      this.uploadValue = 0;
      this.video = null;
      this.videoData = event.target.files[0];
    },

    onUpload() {
      this.video = null;
      const storageRef = firebase
        .storage()
        .ref(`${this.loginUser + this.videoData.name}`)
        .put(this.videoData);
      storageRef.on(
        `state_changed`,
        snapshot => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        error => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then(url => {
            this.video = url;
         var updates={};
          var postKey=firebase.database().ref().push().key;
          var videoData={
                    author_name:this.loginUser,
                    createdAt: new Date(),
                    video_link: url,
                    id:postKey
          }
          updates['videos/'+postKey]=videoData;
          firebase.database().ref().update(updates).then(()=>{
            this.$router.push('Video');  
          })
            
          });
        }
      );
    }
  }
};
</script>