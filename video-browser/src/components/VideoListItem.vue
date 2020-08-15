<template>
    <li class="list-group-item">
        Video List Item
        <img :src="video.snippet.thumbnails.default.url" />
        {{video.snippet.title}}
    </li>
</template>

<script>
export default {
    name: "VideoListItem",
    props: ['video']
}
</script>

<style>
    
</style>