<template>
<div class="music-player">
  <div class="banner">
    <h1>Music Player</h1>
  </div>
  <div class="music-text">
    <p>Playing: {{getInfoSong.name}}</p>
    <p> By: {{getInfoSong.artist.name}} </p>
  </div>
    <div class="player">
        <div class="container">
          <button @click="backwards(currentSong)" class="fas fa-step-backward"></button>
          <button @click="play(getSong)" class="fas fa-play"></button>
          <button @click="pause()" class="fas fa-pause"></button>
          <button  @click="forward(currentSong)" class="fas fa-step-forward"></button>
          <button><i class="fa-solid fa-repeat"></i></button>
        </div>
        <div id="volume-player" class="volume">
            <span><i class="fa fa-volume-down"></i></span>
            <output id="volume-output" class="volume"/>
            <input @click="volume(inputRange)" type="range" min="0" max="100" v-model="inputRange" id="volumeslider">
            <span><i class="fas fa-volume-up"></i></span>
        </div>
        <div class="song-timer">
          <div class="timer">
            <span class="current-time">0:00</span>
            <span class="max-duration">0:00</span>
          </div>
            <div class="progress-area">
            <div class="progress-bar">
        </div>
      </div>
    </div>
  </div>
</div>
</template>


<script>

export default {
  computed:{
    getSong(){
      return this.$store.state.song.videoId
    },

    getInfoSong(){
      return this.$store.state.song
    },

    data(){
      return {
        id: this.$route.params.videoId,
        inputRange: 5,

      }
    }
  },

  methods:{

    play(id){
      player.loadVideoById(id)
      player.playVideo()
      // this.$store.commit("setPlay", true);
      
    },
    pause(){
      player.pauseVideo()
      // this.$store.commit("setPlay", false);
    },
    volume(inputRange){
      player.setVolume(inputRange)
    },
    forward(){
      let result = this.$store.state.searchResult.content
      let currentSong = this.$store.state.song
      console.log(currentSong)
      console.log(result)
        for(let i = 0; i < result.length; ++i){
          if(result[i].videoId === currentSong.videoId && i < result.length){
            this.setAcurrent(result[i+1])
            console.log(result[i+1].videoId)
            this.play(result[i+1].videoId)
            // this.$router.push(`/${result[i+1].videoId}`)
          }
        }      
    },
    backwards(){
      let result = this.$store.state.searchResult.content
      let currentSong = this.$store.state.song
      console.log(currentSong)
      console.log(result)
        for(let i = 0; i < result.length; ++i){
          if(result[i].videoId === currentSong.videoId && i > 0){
            this.setAcurrent(result[i-1])
            console.log(result[i-1].videoId)
            this.play(result[i-1].videoId)
            // this.$router.push(`${result[i+1].videoId}`)
          }
        }
    },
    
    setAcurrent(currentSong){
      this.$store.dispatch('saveSong', currentSong)
    },

  }

}

</script>

<style lang="scss" scoped>

.music-player{
  background-color: #252525;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
  padding: 10px 25px;

  .banner{
    display:flex;
    align-self: center;
    justify-content: center;
    color:#fff;
    font-size: 20px;

    &:hover{
      color:#11b339;
      transition: .4s ease-in all;
    }
  }

  .music-text{
    display:block;
    text-align: center;
    color:#fff;
    padding-bottom: 5px;

    p{
      font-size: 18px;
    }
  }

  .player{

   .volume{
     display:flex;
     align-self: center;
     justify-content: center;
     padding-top: 10px;

     	i {
        color: rgb(194, 194, 194);
      }

      i.fa-volume-down {
        padding-right: 5px;
      }
      
      i.fa-volume-up {
        padding-left:5px;
      }

       input[type="range"]{
        width:20%;
        min-width: 240px;
        -webkit-appearance: none;
        position: relative;
        overflow: hidden;
        height: 15px;
        cursor: pointer;
        border-radius: 0;
      }

      ::-webkit-slider-runnable-track {
          background: #303030;
      }

      ::-webkit-slider-thumb{
        -webkit-appearance: none;
        width:20px;
        height: 40px;
        background: #fff;
        box-shadow: -100vw 0 0 100vw #11b339;
        border: 1px solid rgb(153, 153, 153);
      }
   }

    .container{
      display:flex;
      align-self: center;
      justify-content:center;
      
      button{
        padding: 15px 20px;
      }
    }
  }
}


.progress-area{
  height: 6px;
  width: 100%;
  border-radius: 50px;
  background: #f0f0f0;
  cursor: pointer;
}
.progress-area .progress-bar{
  height: inherit;
  width: 0%;
  position: relative;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--pink) 0%, var(--violet) 100%);
}
.progress-bar::before{
  content: "";
  position: absolute;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  top: 50%;
  right: -5px;
  z-index: 2;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-50%);
  background: inherit;
  transition: opacity 0.2s ease;
}
.progress-area:hover .progress-bar::before{
  opacity: 1;
  pointer-events: auto;
}
.progress-area .song-timer{
  margin-top: 2px;
}
.song-timer span{
  font-size: 13px;
  color: var(--lightblack);
  color:white;
}

</style>
