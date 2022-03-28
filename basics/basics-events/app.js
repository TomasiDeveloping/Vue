const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
  //   add() {
  //     this.counter++;
  //   },
  //   reduce() {
  //     this.counter--;
  //   }
  // },
  add(num) {
    this.counter = this.counter + num;
  },
  reduce(num) {
    this.counter = this.counter - num;
  },
  setName(event) {
    this.name = event.target.value;
  },
  submitForm() {
    alert('Submitted!');
  },
  confirmInput() {
    this.confirmedName = this.name;
  }
},
});

app.mount('#events');
