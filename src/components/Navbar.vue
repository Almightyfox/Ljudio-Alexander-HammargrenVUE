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
        <router-link class="link bottom" :to="{ name: 'about'}"><i class="fa-solid fa-address-card"></i> About</router-link>
        <router-link class="link bottom" :to="{ name: 'contact'}"><i class="fa-solid fa-message"></i> Contact</router-link>
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
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
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
  }
  
  span{
    font-weight: 700;
    color: rgb(145, 145, 145);
    transition: .15s linear color;

    &:hover{
      color: #11b339;
      transition: .4s ease-in all;
    }
  }
}

.nav {
  position:relative;
  padding: 10px;
  top: 2%;
  font-size: 24px;

  a{
    display:block;

    &:hover{
      color:#11b339;
      transition: .4s ease-in all;
    }
  }

  .bottom{
    padding: 10px 0;
  }
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
</style>