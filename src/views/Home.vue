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
        <div class="card">
          <img
            src="../assets/img/test-pic.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Video Title - Could be anything</h5>
            <p class="card-text">Author Name</p>
            <p class="card-text">
              <small class="text-muted">Program | 1 day ago | 200 views </small>
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="../assets/img/test-pic.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This card</p>
            <p class="card-text">
              <small class="text-muted">Program | 1 day ago | 200 views </small>
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="../assets/img/test-pic.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This card has</p>
            <p class="card-text">
              <small class="text-muted">Program | 1 day ago | 200 views </small>
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="../assets/img/test-pic.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider</p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
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
            <h5 class="card-title">Petric Jensen</h5>
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
            <h5 class="card-title">Petric Jensen</h5>
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
            <h5 class="card-title">Petric Jensen</h5>
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
// @ is an alias to /src

export default {
  name: "Home"
};
</script>
