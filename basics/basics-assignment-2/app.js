const app = Vue.createApp({
    data() {
        return {
            userInput: ''
        }
    },
    methods: {
        showAlert() {
            alert('Hello Vue!');
        },
        onInput(event) {
            this.userInput = event.target.value;
        }
    },
});

app.mount('#assignment');