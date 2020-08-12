<template>
    <div>
        <SearchBar @termChange="onTermChange"></SearchBar>
        <VideoList :videos="videos"></VideoList>
        {{videos.length}}
    </div>
</template>

<script>
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import axios from 'axios';
const API_KEY = 'AIzaSyDN3fpkwjP95XyXfdoQ5zkHKRZ0tEQuAf0';

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
        onTermChange(searchTerm) {
            axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    key: API_KEY,
                    type: 'video',
                    part: 'snippet',
                    q: searchTerm
                }
            }).then( (response) => {
                this.videos = response.data.items;
                console.log(response.data.items)
            })
        }
    }
};
</script>