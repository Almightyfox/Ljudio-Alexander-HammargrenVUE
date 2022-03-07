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
            <div v-if="songs.type === 'song'" class="song-result">
                <li @click="getMusic(songs), resetText(), scrollToTop()" id="goToSongB">
                    <img :src="songs.thumbnails[1].url" alt="no thumbnail">
                    <p>Artist: {{songs.artist.name}}</p>
                    <p>Song: {{songs.name}}</p>
                </li>
                    <button @click="goToSong(songs.videoId)">share</button>
            </div>
            <!-- artists -->
           <div v-if="songs.type === 'artist'" class="song-result">
                <li  @click="goToArtist(songs.browseId), resetText()" id="artist-p">
                    <img :src="songs.thumbnails[1].url" alt="no thumbnail">
                    <p>Artist: {{songs.name}}</p>
                </li>
            </div>
            <!-- albums -->
            <div v-if="songs.type === 'album'" class="song-result">
                <li>
                    <img :src="songs.thumbnails[1].url" alt="no thumbnail">
                    <p @click="getAlbum(songs.album), resetText()">Album: {{songs.name}}</p>
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
       },
       scrollToTop() {
            window.scrollTo(0,0);
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
        

        .song-result{

            li{
                display:flex;
                align-items: center;
                justify-content: flex-start;
                padding: 5px 10px;

                p{
                    padding:10px 25px;
                    color:#fff;
                    font-size: 18;
                    font-weight: 400;
                }


            }
                button{
                    margin:5px 13px;
                    padding:10px 40px;
                    color:#fff;
                    background-color:#303030;
                    border:none;
                    border-radius: 5px;
                }
        }

    }

}

</style>

