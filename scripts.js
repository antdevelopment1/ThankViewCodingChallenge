new Vue({
    // el is short for the word element
    el: "#app",
    data: {
        inputText: ''
    },
    computed: {
        identicon: function() {
            return jdenticon.toSVG(this.inputText, 200);
        },
        reverse: function() {
            this.inputText.split("").reverse().join("");
        }
    },
    methods: {
        onInput: function(event) {
            console.log(event.target.value);
            this.inputText = event.target.value;
        },
    },
    template: 
    `
        <div>
            <h3>My Identicon Generator</h3>
            <div>Input: <input v-on:input="onInput"/></div>
            <div>Output: 
                <div v-html="indenticon"></div>
                {{inputText}}
                {{reverse}}
            </div>
        </div>
    `
})