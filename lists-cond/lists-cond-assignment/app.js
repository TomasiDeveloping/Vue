const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            inputTask: '',
            isTaskVisible: true
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.inputTask);
            this.inputTask = '';
        },
        toggleTaskVisible() {
            this.isTaskVisible = !this.isTaskVisible;
        }
    },
});

app.mount('#assignment');