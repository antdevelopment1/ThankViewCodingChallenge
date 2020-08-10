import Vue from 'vue';
import App from './App.vue';

// new Vue({
//     el: '#app',
//     render: function(createElement) {
//         return createElement(App);
//     }
// })

// Equivalent
// new Vue({
//     el: '#app',
//     render: function(h) {
//         return h(App);
//     }
// })

// Equivalent and where to mount vue instance
// new Vue({
//     el: '#app',
//     render: h => h(App)
// })

// Alternate way to el for element to mount to screen
new Vue({
    render: h => h(App)
}).$mount('#app');



