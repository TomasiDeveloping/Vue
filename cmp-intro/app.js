const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'john',
                    name: 'John Doe',
                    phone: '0001234567',
                    email: 'john@doe,com'
                },
                {
                    id: 'julie',
                    name: 'Julie Doe',
                    phone: '03435334567',
                    email: 'julie@doe,com'
                }
            ],
        }
    }
});

app.component('friend-contact', {
    template: `
    <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">{{ detailAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
    `,
    data() {
        return { 
            detailAreVisible: false,
            friend: {
                id: 'john',
                name: 'John Doe',
                phone: '0001234567',
                email: 'john@doe,com'
            }
        }
    },
    methods: {
        toggleDetails() {
            this.detailAreVisible = !this.detailAreVisible;
        }
    }
});

app.mount('#app');