<template>
    <div>
        <Search/>
        <SearchResult/>
        <!-- <MusicPlayer/> -->
    </div>
</template>

<script>
    import Search from '/src/components/Search.vue';
    import SearchResult  from '/src/components/SearchResult.vue';
    import MusicPlayer from '/src/components/MusicPlayer.vue';

    export default{
    
        components: {
            Search,
            SearchResult,
            MusicPlayer
        },

    }
</script>
