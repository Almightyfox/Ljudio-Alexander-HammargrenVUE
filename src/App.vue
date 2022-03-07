<template>
  <div class="app-wrapper">
    <div class="app">
    <Navbar/>
    <!-- <MusicPlayer/> -->
    <!-- <img @click="goHome()" alt="Vue logo" src="./assets/LjudioLogo3hq.png"/> -->
    <!-- <router-view></router-view> -->
    <!-- <Footer/> -->
    </div>
  </div>
</template>

<script>
import Home from '/src/components/Home.vue';
import Navbar from '/src/components/Navbar.vue';
import Footer from '/src/components/Footer.vue';
// import MusicPlayer from '/src/components/MusicPlayer.vue';

export default {

  components: {
    Home,
    Navbar,
    Footer,
    // MusicPlayer
  },

  methods: {
    goHome(){
      this.$router.push('/')
    }
  }
  
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

html{
  background-color:#618366;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
}

.link-light {
  color: #fff;
}


</style>