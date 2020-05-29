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
            <div class="row">
                <div class="col-8">
                  <div class="video">
                        <!-- video  -->
                        <video width="400" controls>
                            <source src="videos/video2.mp4" type="video/mp4">
                            Your browser does not support HTML video.
                        </video>
                        <div class="video-header">
                            <h1>Video Title</h1>
                            <p class="details">Victor Ky | 120 views | 4 days ago </p>
                            <p class="description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected
                                humour, or randomised words which don't look even slightly believable.There are many variations of passages of Lorem Ipsum
                                available.</p>
                        </div>
                        <!-- / video  -->
                  </div>

                  <div class="commentSection">
                    <div class="write-comment">
                      <img src="img/profile-pic.jpg">
                      <input type="text" name="firstname" placeholder="Write a comment..">
                    </div>
                    <div class="commentField">
                      <div class="comment">
                        <a href="#" class="delete-icon-link"><i class="delete-icon fa fa-times" aria-hidden="true"></i></a>
                        <img src="img/profile-pic.jpg">
                        <h3>Iva Todorova</h3>
                        <p class="commentBody">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        </p>
                        <p class="commentDate">4 sept</p>
                      </div>
        
                      <div class="comment">
                        <i class="delete-icon fa fa-times" aria-hidden="true"></i>
                        <img src="img/profile-pic.jpg">
                        <h3>Iva Todorova</h3>
                        <p class="commentBody">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        </p>
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
                </div>
              </div>
        </div>
        <!-- / content  -->
    </div>
<!-- / Body -->
    </div>
</template>