<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone</strong> {{ friend.phone }}</li>
      <li><strong>Email</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "john",
        name: "John Doe",
        phone: "00012455",
        email: "john@doe.com",
      },
    };
  },
    methods: {
      toggleDetails() {
          this.detailsAreVisible = !this.detailsAreVisible;
      }
  }
};
</script>
