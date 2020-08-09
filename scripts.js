new Vue({
    // el is short for the word element
    el: "#app",
    methods: {
        onInput: function(event) {
            console.log(event.target.value);
        },

    }
})