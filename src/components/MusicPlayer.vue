<template>
<div id="music-player">
  <div id="text-top">
    <div>
      <h4>MusicPlayer!</h4>
      <p> Playing: {{getInfoSong.name}}</p>
      <p> By: {{getInfoSong.artist.name}} </p>
    </div>
    <div id="audio-player-container">
      <button @click="backwards(currentSong)" class="fas fa-step-backward"></button>
      <button @click="play(getSong)" class="fas fa-play"></button>
      <button @click="pause()" class="fas fa-pause"></button>
      <button  @click="forward(currentSong)" class="fas fa-step-forward"></button>
        <output id="volume-output" class="volume"/>
        <input @click="volume(inputRange)" type="range" min="0" max="100" v-model="inputRange" id="volumeslider">
        <span><i class="fas fa-volume-up"></i></span>
    </div>
        <div class="progress-area">
        <div class="progress-bar">
        </div>
        <div class="song-timer">
          <span class="current-time">0:00</span>
          <span class="max-duration">0:00</span>
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
      
    },
    pause(){
      player.pauseVideo()
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

<style scoped>

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
}

</style>
