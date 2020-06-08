<template>
  <div class="home">
    <!-- Body -->
    <div class="container">
      <!-- courses-nav -->
      <div class="courses-nav">
        <ul class="">
          <li><a class="current-program " href="#home">Web development</a></li>
          <li><a href="#">Computer Science</a></li>
          <li><a href="#">Design, Technology and Business</a></li>
          <li><a href="#home">Digital Concept Development</a></li>
          <li><a href="#">Multimedia Design</a></li>
          <li><a href="#">Software Development</a></li>
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
          <div class="col-4">
            <div class="video">
              <router-link :to="{ name: 'VideoDetailPage', params: { video: video }}">
              <video width="100">
                <source :src="video.video_link" />
                Your browser does not support HTML video.
              </video>
              </router-link>
              <!-- / video  -->
            </div>
          </div>
          <!-- / Description  -->
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Video title</h5>
              <p class="video-details card-text">
                <small class="text-muted" id="video-details"
                  >{{ video.author_name }} | Web Development | Fronend
                </small>
              </p>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted"
                  >120 views | 4 days ago | 40:10
                  <i class="fa fa-forward" aria-hidden="true"></i>
                </small>
              </p>
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
