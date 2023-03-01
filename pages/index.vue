<template>
  <div class="wrapper">
    <vodal
      :show="show"
      animation="door"
      measure="vw"
      height="40"
      width="80"
      @hide="show = false; $refs.vid.pause(); $refs.vid.currentTime = 0"
    >
      <video class="w-100 h-100"  controls  ref="vid">
        <source src="~/assets/vid/video.mp4" type="video/mp4" />
      </video>
    </vodal>
    <div class="hero pt-5">
      <b-container fluid>
        <b-row class="pt-5">
          <b-col sm="12 mt-5">
            <div class="text-center mt-5">
              <h1 class="text text--white">Influencer Discovery</h1>
              <h5 class="text text--white text--small opacity text--line--height my-4 w-22 m-auto">
                the fastest and most effiecient method to find social media
                Influences
              </h5>
              <b-button class="button btn--theme--success mt-3">Try for Free Today!</b-button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="video_wrapper">
      <b-container fluid>
        <b-row>
          <b-col sm="12" class="text-center">
            <div class="video">
              <img
                src="~/assets/img/poster.jpg"
                class="height w-85 width h-80 "
                alt=""
              />
              <img
                src="~/assets/img/video-control.png"
                class="video_control cursor-pointer"
                @click="showVideo"
                alt=""
              />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="serach_engine">
      <b-container>
        <b-row>
          <b-col sm='12' lg="6">
            <img
              src="~/assets/img/search-engine.png"
              height="430"
              width="530"
              alt=""
            />
          </b-col>
          <b-col  sm='12' lg="6" class="pt-5">
            <h3 class="text text--grey">The Influencer Search Engine</h3>
            <h5 class="text text--light--grey text--small">
              Find authentic influences in seconds and leverage their reach to
              grow your business
            </h5>
            <h5 class="text text--dark--grey text--small"><b class="">SUPPORTED NETWORKINGS</b></h5>
            <ul class="text text--light--grey text--small">
              <li>Twitter (soon)</li>
              <li>Instagram (soon)</li>
              <li>Youtube (soon)</li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="short_list">
      <b-container>
        <b-row class="mb-3">
          <b-col sm="12" class="text-center">
            <h3 class="text text--grey"><b>Search Shortlist and Reach Out</b></h3>
          </b-col>
        </b-row>
      </b-container>
      <b-container>
        <b-row>
          <b-col sm='12' lg="4">
            <div class="cards px-2 py-2">
              <header class="text-center">
                <img src="~/assets/img/card-1.png" alt="" />
              </header>
              <h3 class="title text text--grey">Find Unlimited Influences</h3>
              <p class="text -text--small text--light--grey"> Deep search tech for more than 7 million influencer</p>
            </div>
          </b-col>
          <b-col sm='12' lg="4">
            <div class="cards px-2 py-2">
              <header class="text-center">
                <img src="~/assets/img/card-2.png" alt="" />
              </header>
              <h3 class="title text text--grey">Analyze Data Points</h3>
              <p class="text -text--small text--light--grey">
                Engagement and quality analysis to help you pick real influencer
              </p>
            </div></b-col
          >
          <b-col sm='12' lg="4">
            <div class="cards px-2 py-2">
              <header class="text-center">
                <img src="~/assets/img/card-3.png" alt="" />
              </header>
              <h3 class="title text text--grey">Reach Out</h3>
              <p class="text -text--small text--light--grey">
                Creat influencer lists , export data and start a conversation
              </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="roadmap py-3">
      <b-container>
        <b-row>
          <b-col sm="12" class="text-white text-center mb-2">
            <h4>Roadmap</h4>
            <p>
              The priority of the features on roadmap can change based upon the
              users' feedback.
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm='12' lg="4" class="text-right text-white"
            ><h5 class="text text--sky text--small">Youtube Influencer Discovery</h5>
            <ins>Q4 2019</ins><br />
            <p>
              You'll be able to find and connect with authentic influencer on
              Youtube
            </p>
            <img class="divider-1" src="~/assets/img/divider-1.png" alt="" />
            <img src="~/assets/img/points-2.png" class="points-2" alt="" />
          </b-col>
          <b-col sm='12' lg="5" class="text-right text-white">
            <h5  class="text text--sky text--small">Influencer Contact Info</h5>
            <ins>Q1 2020</ins><br />
            <p>Get contact info of influencers and reach out to them</p>
            <img class="divider-1" src="~/assets/img/divider-5.png" alt="" />
            <img src="~/assets/img/points.png" class="points" alt="" />
          </b-col>
          <b-col sm='12' lg="3" class="text-left text-white">
            <div class="position-relative width w--content--fit">
              <h5  class="text text--sky text--small">Integration with Other Tools</h5>
              <ins>Ongoing</ins><br />
              <p>Email and CRM integration</p>
              <img class="divider-1" src="~/assets/img/divider-6.png" alt="" />
              <img src="~/assets/img/points.png" class="points" alt="" />
            </div>
          </b-col>
        </b-row>
        <b-row class="mt-5">
          <b-col sm="12">
            <div class="divider py-1 bg-light position-relative"></div>
          </b-col>
        </b-row>
        <b-row class="mt-5">
          <b-col sm='12' lg="4" class="text-white"
            ><img src="~/assets/img/points-3.png" class="points-3" alt="" />
            <h5  class="text text--sky text--small">Instagram Influencers</h5>
            <img class="divider-2" src="~/assets/img/divider-2.png" alt="" />
            <ins>Q4 2019-<span>Done</span></ins
            ><br />
            <p>
              You'll be able to find and connect with authentic influencer on
              Instagram
            </p>
          </b-col>
          <b-col sm='12' lg="4" class="text-white">
            <img class="divider-3" src="~/assets/img/divider-3.png" alt="" />
            <img src="~/assets/img/points.png" class="points" alt="" />
            <h5  class="text text--sky text--small">Data Export in CSV</h5>
            <ins>Q4 2020</ins><br />
            <p>Create lists or reports and exports data via CSV</p>
          </b-col>
          <b-col sm='12' lg="4" class="text-white">
            <img src="~/assets/img/points.png" class="points" alt="" />
            <h5  class="text text--sky text--small">Cost Estimation & CPM</h5>
            <img class="divider-4" src="~/assets/img/divider-4.png" alt="" />
            <ins>Q2 2020</ins><br />
            <p>
              Our smart AI witll suggest expected CPM rates or every influencer
            </p>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="solutions">
      <b-container>
        <b-row class="mb-3">
          <b-col sm="12" class="text-center">
            <h3><b>Solution for every kind of business</b></h3>
          </b-col>
        </b-row>
      </b-container>
      <b-container>
        <b-row>
          <b-col sm='12' lg="4">
            <div class="cards px-2 py-2 text-center">
              <header class="text-center">
                <img src="~/assets/img/card-4.png" alt="" />
              </header>
              <h3 class="title text text--grey">Agency</h3>
              <p class="text text--small text--light--grey">
                Whether you are a small agency or a big once ,our influencer
                database will help you get better results for your client
              </p>
            </div>
          </b-col>
          <b-col sm='12' lg="4">
            <div class="cards px-2 py-2 text-center">
              <header class="text-center">
                <img src="~/assets/img/card-5.png" alt="" />
              </header>
              <h3 class="title text text--grey">B2C</h3>
              <p class="text text--small text--light--grey">
                Having influencer from almost every niche and industry makes it
                possible to help you create powerful B2C marketing compaigns.
              </p>
            </div></b-col
          >
          <b-col sm='12' lg="4">
            <div class="cards px-2 py-2 text-center">
              <header class="text-center">
                <img src="~/assets/img/card-5.png" alt="" />
              </header>
              <h3 class="title text text--grey">B2C</h3>
              <p class="text text--small text--light--grey">
                Our search engine maked influencer prospecting and marketing
                easy for the B2B industry well
              </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="data_get">
      <b-container>
        <b-row class="mb-3">
          <b-col sm="12" class="text-center">
            <h3 class="text text--grey"><b>Search Shortlist and Reach Out</b></h3>
          </b-col>
        </b-row>
      </b-container>
      <b-container>
        <b-row>
          <b-col sm='12' lg="4">
            <div class="cards px-2 py-2">
              <header class="text-left">
                <img src="~/assets/img/demographic.png" alt="" />
              </header>
              <h3 class="title text text--grey">Demographic</h3>
              <p class="text text--small text--light--grey">
                Access age and gender statistics for each infLuencer's audience.
                We sample demographic data from every influencers following to
                ensure your campaign reaches your target market
              </p>
               <p class="text text--blue cursor-pointer">Learn More</p>
            </div>
          </b-col>
          <b-col sm='12' lg="4">
            <div class="cards px-2 py-2">
              <header class="text-left">
                <img src="~/assets/img/engagement.png" alt="" />
              </header>
              <h3 class="title text text--grey">Engagement Stats</h3>
              <p class="text text--small text--light--grey">
                We calculate the amount of engagement each profile gets, to
                maximize your money. Metrics like this ensure you don't fall
                victim to influencers with fake followers.
              </p>
             <p class="text text--blue cursor-pointer">Learn More</p>
            </div>
          </b-col>
          <b-col sm='12' lg="4">
            <div class="cards px-2 py-2">
              <header class="text-left">
                <img src="~/assets/img/nichi.png" alt="" />
              </header>
              <h3 class="title text text--grey">Niche</h3>
              <p class="text text--small text--light--grey">
                Our advanced Al system analyzes every profile so that you can
                search our influencer database for almost any niche imaginable.
              </p>
              <p class="text text--blue cursor-pointer">Learn More</p>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm='12' lg="4">
            <div class="cards px-2 py-2">
              <header class="text-left">
                <img src="~/assets/img/location.png" alt="" />
              </header>
              <h3 class="title text text--grey">Location</h3>
              <p class="text text--small text--light--grey">
                We wil also allow you to search by location. You can find local
                influencer so that you can target audience on th hyper-local
                level.
              </p>
             <p class="text text--blue cursor-pointer">Learn More</p>
            </div>
          </b-col>
          <b-col sm='12' lg="4">
            <div class="cards px-2 py-2">
              <header class="text-left">
                <img src="~/assets/img/contact.png" alt="" />
              </header>
              <h3 class="title d-inline-block text text--grey">Contact Info</h3>
              <span  class="text text--success text--medium">(Roadmap)</span>
              <p class="text text--small text--light--grey">
                We will also provide the contact info of tens of thousands of
                influencer.Since you are contacting them directly , that means
                you get the best price .Most middleman service charges are
                massive markups
              </p>
               <p class="text text--blue cursor-pointer">Learn More</p>
            </div>
          </b-col>
          <b-col sm='12' lg="4">
            <div class="cards px-2 py-2">
              <header class="text-left">
                <img src="~/assets/img/cost.png" alt="" />
              </header>
              <h3  class="title d-inline-block text text--grey">Cost Estimation</h3>
              <span class="text text--success text--medium">(Roadmap)</span>
              <p class="text text--small text--light--grey">
                If you want to compare the effectiveness of different influencer
                inside the platform , you'll able to use our CPM tool to
                estimate costs.
              </p>
              <p class="text text--blue cursor-pointer">Learn More</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="pricing_transparent">
      <b-container>
        <b-row>
          <b-col sm='12' lg="6">
            <div>
              <h3 class="text text--grey">Simple & Transparent Pricing</h3>
              <ul class="text text--small text--light--grey">
                <li>Unlimited Serivces</li>
                <li>Unlimited Saved Lists</li>
                <li>Twitter Influencers</li>
                <li>Instagram Influencers</li>
                <li>Youtube Influencers (soon)</li>
                <li>Export data</li>
                <li>InfLuencer's granular details</li>
                <li>CPM estimation</li>
                <li>#rd Party Integration</li>
                <li>Future Updates Included</li>
              </ul>
            </div>
          </b-col>
          <b-col sm='12' lg="6" class="">
            <div class="buy_now width w-65 m-auto ">
              <div class="pt-5 pl-4">
                <ins class="text text--yellow">WAS</ins>
                <br />
                <h3 class="text text--yellow mb-4"><del>$199/lifetime</del></h3>
                <br />
                <ins class="text text--white ">Now</ins>
                <br />
                <h3 class="text text--white "><ins>$99/Lifetime</ins></h3>
              </div>
              <div class="p-3">
                <h5>BUY NOW</h5>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="any_question">
      <b-container class="py-5">
        <b-row>
          <b-col sm="12" class="text-center bg-white py-5">
            <h3 class="text text--grey">Got any questions?</h3>
            <b-button class="button btn--theme--success mt-2 rounded">Contact Us</b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  mounted() {},
  methods: {
    showVideo() {
      this.show = true;
      this.$refs.vid.play()
    },
  },
};
</script>