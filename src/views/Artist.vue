<template>
<div class="artist">
    <div class="banner">
      <h2>{{ getArtist.name }}</h2>
    </div>
    <img :src="getArtist.thumbnails[1].url" alt="no thumbnail" />
  <div class="artist-info">
      <div class="banner">
        <h2>Details</h2>
      </div>
    <div class="artist-text">
      <p>{{ getArtist.description }}</p>
      <div class="column">
        <div class="artist-music">
          <h2>Songs</h2>
          <div class="list" v-for="song in getArtist.products.songs.content" :key="song">
            <p id="songList">{{ song.name }}</p>
          </div>
        </div>
        <div class="artist-music">
            <h2>Albums</h2>
            <div class="list" v-for="album in getArtist.products.albums.content" :key="album">
              <p id="artistList">{{ album.name }}</p>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
  created() {
    this.fetchArtist();
  },

  data() {
    return {
      browseId: this.$route.params.browseId,
    };
  },

  computed: {
    getBrowse() {
      return this.$store.state.browseId;
    },
    getArtist() {
      console.log(this.$store.state.artist);
      return this.$store.state.artist;
    },
  },

  methods: {
    fetchArtist() {
      this.$store.dispatch(`fetchYoutubeArtistApi`, this.browseId);
    },
  },
};
</script>

<style lang="scss" scoped>

.artist{
  display:block;
  margin: 0 80px;

  .banner{
    display:flex;
    align-self:center;
    justify-content: center;
    padding: 10px 0;
    font-size: 42px;
    color:#fff;
  }

  img{
    width:100%;
    border: 10px solid rgb(235, 235, 235);
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
  }

  .artist-info{

    .artist-text{
      padding: 15px 15px;
      color:#fff;
      background-color: #303030;
      font-size:16px;
      font-weight: 400px;
    }

    .column{
      display:flex;
      align-self:center;
      justify-content: center;

      .artist-music{
        padding:10px 80px;
        margin:0 5px;
        background-color: #666666;
        .list{
          
        }
      }
    }
  }
}

</style>