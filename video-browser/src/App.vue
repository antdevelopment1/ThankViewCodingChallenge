<template>
    <div class="container">
        <SearchBar @termChange="onTermChange"></SearchBar>
        <div class="row">
            <VideoList :videos="videos" @videoSelect="selectedVideo"></VideoList>
            <VideoListDetail :videos="videos"></VideoListDetail>
        </div>
    </div>
</template>

<script>
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoListDetail from './components/VideoList';
import axios from 'axios';
const API_KEY = 'AIzaSyBmq3yqnILyvKlilaAx3-YisOCYN3nTmyw';

export default {
    name: 'App',
    components: {
        SearchBar: SearchBar,
        VideoList: VideoList,
        VideoListDetail: VideoListDetail
    },
    data: function() {
        return {
            videos: [],
            selectedVideo: null
        }
    },
    methods: {
        onVideoSelect(video) {
            this.selectedVideo = video;
        },
        onTermChange(searchTerm) {
            axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    key: API_KEY,
                    type: 'video',
                    part: 'snippet',
                    q: searchTerm
                }
            }).then( (response) => {
                console.log(response);
                this.videos = response.data.items;
                console.log(response.data.items);
            })
        }
    }

    
};
</script>
