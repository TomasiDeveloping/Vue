const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      entredGoal: ''
     };
  },
  methods: {
    addGoal() {
      this.goals.push(this.entredGoal);
      this.entredGoal = '';
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    }
  },
});

app.mount('#user-goals');
