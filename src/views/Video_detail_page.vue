<template>
  <div class="home">
    <!-- Body -->
    <div class="container">
      <!-- courses-nav -->
      <div class="courses-nav">
        <ul class="">
          <li><a class="current-program " href="#home">Web Development</a></li>
          <li><a href="#">User Experience</a></li>
          <li><a href="#">Development environments</a></li>
          <li><a href="#home">Web programming</a></li>
          <li><a href="#">Web - Data</a></li>
          <li><a href="#">Web - Frontend</a></li>
          <!-- <li><a class="active" href="#home">Web programming</a></li> -->
        </ul>
      </div>
      <!-- / courses-nav  -->

      <!--  content  -->
      <div class="content-video">
        <div class="row">
          <div class="col-8">
            <div class="video">
              <video width="400" controls>
                <source :src="video.video_link" />
                Your browser does not support HTML video.
              </video>
              <div class="video-header">
                <h1>Video Title</h1>
                <p class="details">
                  {{ video.author_name }} | 120 views | {{ video.createdAt }}
                </p>
                <p class="description">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour.
                </p>
              </div>
            </div>
            <!-- / video  -->
            <div class="commentSection">
              <div class="write-comment">
                <img src="../assets/img/profile-pic.jpg" />
                <input
                  type="text"
                  name="comment"
                  v-model="comment"
                  v-on:keyup.enter="
                    videoId = video.id;
                    savecomment();
                  "
                  placeholder="Write a comment.."
                />
              </div>
              <div
                class="commentField"
                v-for="comment in video.comments"
                :key="comment"
              >
                <div class="comment">
                  <a href="#" class="delete-icon-link"
                    ><i class="delete-icon fa fa-times" aria-hidden="true"></i
                  ></a>
                  <img src="../assets/img/profile-pic.jpg" />
                  <h3>{{ comment.author_name }}</h3>
                  <p class="commentBody">{{ comment.comment }}</p>
                  <p class="commentDate">4 sept</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="autoplay">
              <div class="video-card card mb-3" style="max-width: 540px;">
                <div class="row no-gutters">
                  <div class="col-md-6">
                    <img
                      src="../assets/img/video-temp-02.png"
                      class="card-img"
                      alt="..."
                    />
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
          </div>
        </div>
      </div>
    </div>
    <!-- / content  -->
  </div>
  <!-- / Body -->
</template>

<script>
import * as firebase from "firebase";
export default {
  name: "Video_detail_page",
  props: {
        video:""
    },
  data() {
    return {
      videoId: "",
      userName: localStorage.getItem("login_user_name"),
      comment: ""
    };
  },
  mounted() {
    if(this.video){
    localStorage.setItem("my_video_id",this.video.id);
    }
    else{
      this.getVideo();
    }

  },
  methods: {
    getVideo() {
      firebase
        .database()
        .ref()
        .child("videos/")
        .once("value", snapshot => {
          var videos = snapshot.val();
          for (var x in videos) {
            var video_info = videos[x];
            if(video_info.id == localStorage.getItem("my_video_id")){
                 this.video = video_info;
            }
          }
        });
    },
    savecomment() {
      var postKey = this.videoId;
      var updates = {};
      var commentData = {
        comment: this.comment,
        author_name: 'root',
        createdAt: new Date()
      };
      var Key = firebase
        .database()
        .ref()
        .push().key;
      updates["videos/" + postKey + "comments/" + Key] = commentData;
      // firebase.database().ref().update(updates).then(()=>{
      // })

      firebase
        .database()
        .ref("videos/" + postKey)
        .child("comments/")
        .push({
          comment: this.comment,
          author_name: this.userName,
          time: new Date()
        })
        .then(() => {
          location.reload();
        });
    }
    
  }
};

</script>