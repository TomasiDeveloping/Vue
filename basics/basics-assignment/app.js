const app = Vue.createApp({
    data() {
        return {
            name: 'Patrick',
            age: 39,
            imageUrl: 'https://cdn.pixabay.com/photo/2019/06/17/19/48/source-4280758_1280.jpg'
        }
    },
    methods: {
        randomNumber() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return 1;
            } else {
                return 0;
            }
        }
    },
});

app.mount('#assignment')