<template>
    <div class="container">
        <SearchBar @termChange="onTermChange"></SearchBar>
        <VideoList :videos="videos" @videoSelect="onVideoSelect"></VideoList>
        {{videos.length}}
    </div>
</template>

<script>
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import axios from 'axios';
const API_KEY = 'AIzaSyBmq3yqnILyvKlilaAx3-YisOCYN3nTmyw';

export default {
    name: 'App',
    components: {
        SearchBar: SearchBar,
        VideoList: VideoList
    },
    data: function() {
        return {
            videos: [],
        }
    },
    methods: {
        onVideoSelect(video) {
            console.log(video)
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
                console.log(response)
                this.videos = response.data.items;
                console.log(response.data.items);
            })
        }
    }
};
</script>
