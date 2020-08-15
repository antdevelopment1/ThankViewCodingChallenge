<template>
    <ul class="list-group">
        <VideoListItem v-for="video in videos" :video="video" :key="video.etag" @videoSelect="onVideoSelect"></VideoListItem>
    </ul>
</template>

<script>
import VideoListItem from './../components/VideoListItem';
export default {
    name: "VideoList",
    components: {
        VideoListItem: VideoListItem
    },
    props: {
        videos: Array
    },
    methods: {
        onVideoSelect(video) {
            this.$emit('videoSelect', video);
        }
    }
}
</script>

<style>
    
</style>