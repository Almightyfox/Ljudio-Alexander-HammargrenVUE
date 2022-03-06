import { createStore } from "vuex" 


const store = createStore({

   state:{
       searchResult: [],
    //    currentSong:{
    //     name: "",
    //     artist: "",
    //     videoId: 0
    //    },
       browseId: "",
       artist:
           {type: "artist",
           browseId: ""
        },
       album: [],
       song: {
           name: "",
           album:{
               name:""
           },
           artist: {
               name: ""
           }
       },
       currentpath: "",
    //    isPlaying:false
   },

   mutations:{
        
    setSearchResult(state, result){
        state.searchResult = result;
    },
    // setCurrentSong(state, song){
    //     state.currentSong = song;
    // },
    setBrowsingId(state, browseId){
        state.browseId = browseId;
    },
    setArtistInfo(state, artist){
        state.artist = artist;
    },
    setAlbumInfo(state, album){
        state.album = album;
    },
    setSongInfo(state, song){
        state.song = song;
    },
    currentPath(state, currentpath){
        state.currentpath = currentpath;
    },
    setOneSong(state, song){
        state.song = song.content[0];
    },
    // setPlay(state,value){
    //     state.isPlaying = value;
    // }

   },

   actions:{

        async fetchYoutubeSearchApi({commit}, searchObject){
            console.log(searchObject.searchType);
            let response = await fetch(`https://yt-music-api.herokuapp.com/api/yt/${searchObject.searchType}/${searchObject.searchString}`);
            let searchResult = await response.json();
            commit('setSearchResult', searchResult);
            // console.log(searchResult);
        },


        async fetchYoutubeArtistApi({commit}, browseId){
            let response = await fetch(`https://yt-music-api.herokuapp.com/api/yt/artist/${browseId}`);
            let result = await response.json();
            commit('setArtistInfo', result);
        },

        async fetchYoutubeAlbumApi({commit}, browseId){
            let response = await fetch(`https://yt-music-api.herokuapp.com/api/yt/album/${browseId}`);
            let result = await response.json();
            commit('setAlbumInfo', result);
        },

        //fetch multiple songs
        async fetchYoutubeSongApi({commit}, vidId){
            let response = await fetch(`https://yt-music-api.herokuapp.com/api/yt/songs/${vidId}`);
            let result = await response.json();
            commit('setSongInfo', result);
        },

        //fetch one song
        async fetchOneSong({commit}, vidId){
            let response = await fetch(`https://yt-music-api.herokuapp.com/api/yt/songs/${vidId}`);
            let result = await response.json();
            commit('setOneSong', result);
        },

       
        saveSong({commit}, videoId){
            commit('setSongInfo', videoId)
        },

        saveArtist({commit}, browseId){
            commit('setArtistInfo', browseId)
        },

        saveAlbum({commit}, album){
            commit('setAlbumInfo', album)
        },

        currentPath({commit}, videoId){
            commit('currentPath', videoId)
        }

   }

})



export default store