<!-- Victor chaged paths to the images  src="../assets/img/profile-pic.jpg" -->
<template>
  <div class="home">
    <div class="container">
      <!-- Front Picture -->
      <img class="front-img" src="../assets/img/front-img.png" alt="" />
      <!-- Benefits -->
      <div class="benefits row">
        <div class="benefit col">
          <img src="../assets/img/benefits-02.png" alt="" />
          <h1>Expand your network</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="benefit col">
          <img src="../assets/img/benefits-03.png" alt="" />
          <h1>Exchange knowledge</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="benefit col">
          <img src="../assets/img/benefits-04.png" alt="" />
          <h1>Watch online lessons</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <!-- <div class="test"></div> -->


 

      <!-- Latest 3 videos -->
      <div class="latest-videos card-deck">
        
        <div class="card" v-for="video in videos.slice(0, 4)"
          :key="video">
              <router-link :to="{ name: 'VideoDetailPage', params: { video: video }}">
              <video width="100%">
                <source :src="video.video_link" />
                Your browser does not support HTML video.
              </video>
              </router-link>
          <div class="card-body">
            <h5 class="card-title">Video Title - Could be anything</h5>
            <p class="card-text">{{ video.author_name }}</p>
            <p class="card-text">
              <small class="text-muted">Web development <br>1 day ago - 200 views </small>
            </p>
          </div>
        </div>


      </div>
      <!-- Become a teacher -->
      <div class="become-teacher card text-center">
        <div class="card-body">
          <h5 class="card-title">Become an online teacher</h5>
          <p class="card-text">
            Are you a senior student? Do you want to share you knowledge and
            skills you gained during your UCN eduction? Learn about the benefits
            of being a teacher at youStudent and sign up here:
          </p>
          <a href="#" class="btn btn-primary">Learn more</a>
        </div>
      </div>
      <!-- Testimonials -->
      <div class="testimonials-grid card-deck">
        <div class="card">
          <img
            src="../assets/img/profile-pic.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Patrick Jensen</h5>
            <p class="card-text">
              <small class="text-muted"
                >3rd semester in Multimedia Design</small
              >
            </p>
            <p class="card-text">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              sodales turpis a enim elementum, eu faucibus metus pharetra.
              Vestibulum ac sem vitae leo viverra semper. Phasellus eget justo
              tellus."
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="../assets/img/profile-pic.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Patrick Jensen</h5>
            <p class="card-text">
              <small class="text-muted"
                >3rd semester in Multimedia Design</small
              >
            </p>
            <p class="card-text">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              sodales turpis a enim elementum, eu faucibus metus pharetra.
              Vestibulum ac sem vitae leo viverra semper. Phasellus eget justo
              tellus."
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="../assets/img/profile-pic.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Patrick Jensen</h5>
            <p class="card-text">
              <small class="text-muted"
                >3rd semester in Multimedia Design</small
              >
            </p>
            <p class="card-text">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              sodales turpis a enim elementum, eu faucibus metus pharetra.
              Vestibulum ac sem vitae leo viverra semper. Phasellus eget justo
              tellus."
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase";
export default {
  name: "Home",

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