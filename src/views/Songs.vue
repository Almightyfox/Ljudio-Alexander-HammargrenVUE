<template>
    <div class="song-view">
        <div class="banner">
            <h1>{{getSongs.name}}</h1>
            <img :src="getSongs.thumbnails[1].url" alt="no thumbnail">
        </div>
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
.song-view{
    display:flex;
    align-self:center;
    justify-content: center;
    
    h1{
        color:#fff;
        font-size: 42px;
        font-weight: 200px;
    }

    img{
        width:100%;
    }
}

</style>
