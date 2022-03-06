<template>
    <div id="song-view">
        <h3>{{getSongs.name}}</h3>
        <img :src="getSongs.thumbnails[1].url" alt="no thumbnail">
    </div>
</template>


<script>

export default {
   created(){
        this.fetchSong();
        // window.player.loadVideoById(this.$route.params.videoId)

   },

   data(){
       return{
           videoId: this.$route.params.videoId
       }
   },

   computed:{
       getVid(){
           return this.$store.state.videoId;
       },
       getSongs(){
           console.log(this.$store.state.song)
           return this.$store.state.song;
       }
   },

   methods:{
       fetchSong(){
           this.$store.dispatch(`fetchOneSong`, this.$route.params.videoId)
       },
   }
}
</script>


<style lang="scss" scoped>


</style>
