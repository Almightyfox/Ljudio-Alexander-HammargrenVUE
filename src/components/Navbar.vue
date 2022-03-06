<template>
<main class="main">
  <aside class="sidebar">
  <header id="header" class="banner">
    <h1 class="logo">
      <router-link class="link" :to="{ name: 'Home'}">Ljudio <span>Music</span></router-link>
    </h1>
    <hr>
  </header>
    <nav class="nav">
      <ul>
        <router-link class="link bottom" :to="{ name: 'about'}">About</router-link>
        <router-link class="link bottom" :to="{ name: 'contact'}">Contact</router-link>
      </ul>
    </nav>
  </aside>

  <section class="musicplayer">
        <MusicPlayer/>
        <router-view></router-view>
  </section>
</main>
</template>


<script>
import MusicPlayer from '/src/components/MusicPlayer.vue';

export default{
  components: {
    MusicPlayer
  },
}
</script>

<style lang="scss" scoped>

.sidebar {
  position: fixed;
  width: 15%;
  height: 100vh;
  background: #303030;
  font-size: 0.65em;
}

.logo{
  text-transform: lowercase;
  text-align: center;
  padding: 0;
  margin: 0;
  

  a{
    display: block;
    padding: 1em 0;
    font-size: 22px;
    color: #fff;
    transition: .15s linear color;
  }
  
  span{
    font-weight: 700;
    color: #3678da;
    transition: .15s linear color;

    &:hover{
      color: #fd8f00;
    }
  }
}

.nav {
  position:relative;
  padding-left: 30px;
  top: 10%;
  font-size: 24px;
}

.musicplayer {
  position: relative;
  width: 85%;
  float: right;
  height: 100vh;
  
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
}

a{
  display:block;
}

.bottom{
  padding: 10px 0;
}



</style>