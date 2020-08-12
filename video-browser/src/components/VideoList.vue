<template>
    <ul>
        <VideoListItem v-for="(video, index) in videos" :key=index>{{video}}</VideoListItem>
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