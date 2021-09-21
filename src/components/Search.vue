<template>
    <div id="mainDiv">
        <div class="search-div">
                <label for="">Bring in some music!</label>
            <div>
                <input @keyup.enter="getSearch(searchObject), resetText()" class="searchbar" type="text" placeholder="Search for songs, artist or albums...."
                 v-model="searchObject.searchString" @keyup="getSearch(searchObject)" required>
                <select v-model="searchObject.searchType">
                    <option :value="'search'">All</option>
                    <option :value="'songs'">Song</option>
                    <option :value="'album'">Album</option>
                    <option :value="'artists'">Artist</option>
                </select>
                <!-- <button @click="getSearch(searchObject)">Search</button> -->
            </div>
        </div>
        <hr>
        <!-- list of the songs or artist searched -->
        <div id="list-Songs" v-for="(songs, videoId) in getMusicYt" :key="videoId">
            <!-- songs -->
            <div v-if="songs.type === 'song'">
                <li>
                    <img :src="songs.thumbnails[1].url" alt="no thumbnail">
                    <span>
                        <p @click="getMusic(songs), resetText()">Artist: {{songs.artist.name}}, Song: {{songs.name}}</p>
                        <button @click="goToSong(songs.videoId)">share</button>
                    </span>
                </li>
            </div>
            <!-- artists -->
           <div v-if="songs.type === 'artist'">
                <li>
                    <img :src="songs.thumbnails[1].url" alt="no thumbnail">
                    <span>
                        <p @click="goToArtist(songs.browseId), resetText()">Artist: {{songs.name}}</p>
                    </span>
                </li>
            </div>
            <!-- albums -->
            <div v-if="songs.type === 'album'">
                <li>
                    <img :src="songs.thumbnails[1].url" alt="no thumbnail">
                    <span>

                    <p @click="getAlbum(songs.album), resetText()">Album: {{songs.name}}</p>
                    </span>
                </li>
            </div>
        </div>
        <hr>
    </div>
</template>

<script>

export default{
    
    data(){
        return{
            searchObject:{
                searchString:"",
                searchType: "search"
            }
            // ifSearched: false,
            // searchValue: "All",
        }
    },

    methods: {
       getSearch(){
           this.$store.commit('setBrowsingId', 0)
           this.$store.dispatch('fetchYoutubeSearchApi', this.searchObject)
       },
       getMusic(videoId){   
           this.$store.dispatch('saveSong', videoId)
       },
       getArtist(){
           this.$store.dispatch('saveArtist', browseId)
       },
       goToSong(videoId){
        //    this.$store.dispatch('saveSong', videoId)
           this.$router.push(`/songs/${videoId}`)
       },
       goToArtist(browseId){ 
           this.$store.dispatch('saveArtist', browseId)
           this.$router.push(`/artist/${browseId}`)
       },
       resetText:function(e){
          this.searchObject.searchString="";
       }

    
    },
    computed:{
        getMusicYt(){
            return this.$store.state.searchResult.content
        },
    }
}
</script>


<style scoped>
/* 
input[type=text], select {
  width: 25%;
  padding: 6px 10px;
  margin: 1vh 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
} */

input[type=text] {
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  width: 80%;
  background: #f1f1f1;
}

input, select{
  width: 10%;
  padding: 1.3vh;
  border: 1px solid grey;
  background: #f1f1f1;
}


div {
  border-radius: 6px;
  background-color: #597180;
  padding: 0.4vh;
}

button{
    margin-top: 1vh;
}

</style>

