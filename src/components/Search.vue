<template>
    <div class="main">
        <div class="banner">
                <label for="">Bring in some music!</label>
        </div>
        <div class="search-input">
            <input @keyup.enter="getSearch(searchObject), resetText()" class="searchbar" type="text" placeholder="Search for songs, artist or albums...."
             v-model="searchObject.searchString" @keyup="getSearch(searchObject)" required>
            <select v-model="searchObject.searchType" class="select-style">
                <option :value="'search'">All</option>
                <option :value="'songs'">Songs</option>
                <option :value="'album'">Album</option>
                <option :value="'artists'">Artist</option>
             </select>
             <!-- <button @click="getSearch(searchObject)">Search</button> -->
         </div>
        <!-- list of the songs or artist searched -->
        <div class="song-list" v-for="(songs, videoId) in getMusicYt" :key="videoId">
            <!-- songs -->
            <div v-if="songs.type === 'song'">
                <li>
                    <img :src="songs.thumbnails[1].url" alt="no thumbnail">
                    <span>
                        <p @click="getMusic(songs), resetText()" id="goToSongB">Artist: {{songs.artist.name}}, Song: {{songs.name}}</p>
                        <button @click="goToSong(songs.videoId)">share</button>
                    </span>
                </li>
            </div>
            <!-- artists -->
           <div v-if="songs.type === 'artist'">
                <li>
                    <img :src="songs.thumbnails[1].url" alt="no thumbnail">
                    <span>
                        <p @click="goToArtist(songs.browseId), resetText()" id="artist-p">Artist: {{songs.name}}</p>
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


<style lang="scss" scoped>

.main{
    display:block;
    background-color: #618366;

    .banner{
        display:flex;
        align-self: center;
        justify-content: center;
        font-size: 36px;
        font-weight: 500;
        color:rgb(255, 255, 255);
    }

    .search-input{
        display:flex;
        align-self: center;
        justify-content: center;

        input{
            width:30%;
            min-width:240px;
            padding: 10px 10px;
            background-color:#303030;
            border:none;
            outline:none;
            border-radius:1px;
            color:#fff;
            cursor: pointer;

        }

        input::placeholder{
            color:#fff;
        }

        .select-style{
            background-color:#303030;
            color:#fff;
            width: 10%;
            max-width:75px;
            font-size: 16px;
            border: 1px solid #303030;
            box-shadow: none;
            outline:none;
        }
    }

    .song-list{
        display:flex;
        align-self: center;
        justify-content: flex-start;
        list-style:none;
    }

}

</style>

