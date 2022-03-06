<template>
    <div>
        <Search/>
        <SearchResult/>
    </div>
</template>

<script>
    import Search from '/src/components/Search.vue';
    import SearchResult  from '/src/components/SearchResult.vue';
    import MusicPlayer from '/src/components/MusicPlayer.vue';

    export default{
        name: "Home",
        components: {
            Search,
            SearchResult,
            MusicPlayer
        },

    }
</script>


<style lang="scss" scoped>

</style>