<template>
    <div>
        <SearchBar @termChange="onTermChange"></SearchBar>
    </div>
</template>

<script>
import SearchBar from './components/SearchBar';
const API_KEY = 'AIzaSyDN3fpkwjP95XyXfdoQ5zkHKRZ0tEQuAf0';
export default {
    name: 'App',
    components: {
        SearchBar: SearchBar
    },
    methods: {
        onTermChange(searchTerm) {
            console.log(searchTerm)
        }
    }
};
</script>