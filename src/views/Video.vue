<template>
    <div class="home">
        <!-- Body -->
<div class="container">
    <!-- courses-nav -->
    <div class="courses-nav">
        <ul class="">
            <li><a class="current-program " href="#home">Web Development</a></li>
            <li> <a href="#">User Experience</a> </li>
            <li> <a href="#">Development environments</a> </li>
            <li><a href="#home">Web programming</a></li>
            <li><a href="#">Web - Data</a></li>
            <li><a href="#">Web - Frontend</a></li>
            <!-- <li><a class="active" href="#home">Web programming</a></li> -->
        </ul>
    </div>
    <!-- / courses-nav  -->

    <!--  content  -->
    <div class="content-video">
            <div class="row" v-for = "video in videos" :key="video">
                <div class="col-8">
                  <div class="video">
                        <video width="400" controls>
                            <source :src="video.video_link">
                            Your browser does not support HTML video.
                        </video>
                        <div class="video-header">
                            <h1>{{video.author_name}}</h1>
                            <p class="details">{{video.createdAt}} </p>
                        </div>
                        <!-- / video  -->
                  </div>
                  <div class="commentSection">
                    <div class="write-comment">
                      <input type="text" name="comment" v-model="comment" v-on:keyup.enter="videoId = video.id; savecomment()" placeholder="Write a comment..">
                    </div>
                    <div class="commentField" v-for = "comment in video.comments" :key="comment">
                      <div class="comment">
                        <h3>User: {{comment.author_name}}</h3>
                        <p>Comment: {{comment.comment}}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- <div class="col">
                <div class="autoplay">
                  <div class="video-card card mb-3" style="max-width: 540px;">
                    <div class="row no-gutters">
                      <div class="col-md-6">
                        <img src="img/video-temp-02.png" class="card-img" alt="...">
                      </div>
                      <div class="col-md-6">
                        <div class="card-body">
                          <h2 class="card-title">Video Title</h2>
                          <p class="card-text">Victor Ky</p>
                          <p class="card-text">120 views | 4 days ago</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="video-card card mb-3" style="max-width: 540px;">
                    <div class="row no-gutters">
                      <div class="col-md-6">
                        <img src="img/video-temp-02.png" class="card-img" alt="...">
                      </div>
                      <div class="col-md-6">
                        <div class="card-body">
                          <h2 class="card-title">Video Title</h2>
                          <p class="card-text">Victor Ky</p>
                          <p class="card-text">120 views | 4 days ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div> -->
              </div>
        </div>
        <!-- / content  -->
    </div>
<!-- / Body -->
    </div>
</template>

<script>
import * as firebase from "firebase";
export default {
  name: "Video",

  data() {
    return {
      videos:[],
      videoId:'',
      userName:localStorage.getItem('login_user_name'),
      comment:''
    };
  },
  mounted(){
    this.getVideos();
  },
  methods: {
    getVideos() {
          firebase.database().ref().child('videos/').once('value',(snapshot)=>{
           var videos = snapshot.val();
           console.log(videos);
           var videos_list = [];
           for(var x in videos){
             var video_info =videos[x];   
             videos_list.push(video_info);  
           }
           this.videos = videos_list;
          })
    },
    savecomment(){
      var postKey = this.videoId;
         var updates={};
          var commentData={
                    comment: this.comment,
                    author_name:this.userName,
                    createdAt: new Date()
          }
          var Key=firebase.database().ref().push().key;
          updates['videos/'+postKey+'comments/'+Key]=commentData;
          // firebase.database().ref().update(updates).then(()=>{
          // })

          firebase.database().ref('videos/'+postKey).child('comments/').push(
            {
                    comment: this.comment,
                    author_name:this.userName,
                    time: new Date()
          }
          ).then(()=>{
            location.reload();
          })
    }
  },
};
</script>