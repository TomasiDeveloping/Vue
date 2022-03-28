const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  watch: {
    name(newValue, oldValue) {
      console.log('watch for name newValue: ' + newValue + ' oldValue: ' + oldValue);
    }
  },
  computed: {
    fullname() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Tomasi';
    }
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
