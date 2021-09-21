<template>
    <div id="artist-view">
        <h2>{{getArtist.name}}</h2>
        <img :src="getArtist.thumbnails[1].url" alt="no thumbnail">
        <div id="text-inArtist">
            <p>{{getArtist.description}}</p>
            <table v-for="song in getArtist.products.songs.content" :key="song">
                <tr>
                    <p>Song</p>
                </tr>
                <tr>
                    <td>{{song.name}}</td>
                </tr>
            </table>
            <table v-for="album in getArtist.products.albums.content" :key="album">
                <tr>
                    <p>Albums</p>
                </tr>
                <tr>
                    <td>{{album.name}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>


<script>
export default{
   created(){
       this.fetchArtist();
   },

   data(){
       return{
           browseId: this.$route.params.browseId
       }
   },

    computed:{
        getBrowse(){
            return this.$store.state.browseId;
        },
        getArtist(){
            console.log(this.$store.state.artist)
            return this.$store.state.artist;
        }
        
    },

    methods:{
        fetchArtist(){
            this.$store.dispatch(`fetchYoutubeArtistApi`, this.browseId)
        }
    },

}
</script>

<style>
@import '/src/assets/style.css';

</style>