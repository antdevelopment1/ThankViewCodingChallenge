new Vue({
    el: "#root",
    data: {
        styleOne: {}, styleTwo: {},
    },
    methods: {
        onMouseMove(event) {
            this.styleOne = transform(-event.clientX / event.clientY);
            this.styleTwo = transform(-event.clientX / event.clientY);
        }
    }
})