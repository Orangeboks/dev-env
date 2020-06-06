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
        <div
          class="row"
          v-for="video in videos"
          :key="video"
          style="margin-top:10px"
        >
          <div class="col-8">
            <div class="video">
              <video width="400" controls>
                <source :src="video.video_link" />
                Your browser does not support HTML video.
              </video>
              <!-- / video  -->
            </div>
          </div>
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
      videos: [],
      videoId: "",
      userName: localStorage.getItem("login_user_name"),
      comment: ""
    };
  },
  mounted() {
    this.getVideos();
  },
  methods: {
    getVideos() {
      firebase
        .database()
        .ref()
        .child("videos/")
        .once("value", snapshot => {
          var videos = snapshot.val();
          console.log(videos);
          var videos_list = [];
          for (var x in videos) {
            var video_info = videos[x];
            videos_list.push(video_info);
          }
          this.videos = videos_list;
        });
    }
  }
};
</script>
