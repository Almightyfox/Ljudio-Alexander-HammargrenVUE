<template>
  <div id="artist-view">
    <h2>{{ getArtist.name }}</h2>
    <img :src="getArtist.thumbnails[1].url" alt="no thumbnail" />
    <div id="text-inArtist">
      <h3>Details</h3>
      <p>{{ getArtist.description }}</p>
      <div class="column">
        <div>
          <p id="artist-Title">Songs</p>
          <div id="list" v-for="song in getArtist.products.songs.content" :key="song">
            <p id="songList">{{ song.name }}</p>
          </div>
        </div>
        <div>
          <p id="artist-Title">Albums</p>
          <div id="list" v-for="album in getArtist.products.albums.content" :key="album">
            <p id="artistList">{{ album.name }}</p>
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

</style>