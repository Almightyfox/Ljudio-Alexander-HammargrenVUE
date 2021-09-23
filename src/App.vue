<template>
  <div>
    <Navbar/>
    <img @click="goHome()" alt="Vue logo" src="./assets/LjudioLogo3hq.png"/>
    <router-view></router-view>
    <MusicPlayer/>
    <Footer/>
  </div>
</template>

<script>
import Home from '/src/components/Home.vue';
import Navbar from '/src/components/Navbar.vue';
import Footer from '/src/components/Footer.vue';
import MusicPlayer from '/src/components/MusicPlayer.vue';

export default {

  components: {
    Home,
    Navbar,
    Footer,
    MusicPlayer
  },

  methods: {
    goHome(){
      this.$router.push('/')
    }
  }
  
}
</script>

<style scoped>

</style>