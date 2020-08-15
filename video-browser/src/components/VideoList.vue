<template>
    <ul class="list-group">
        <VideoListItem v-for="video in videos" :video="video" :key="video.etag"></VideoListItem>
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
    }
}
</script>

<style>
    
</style>