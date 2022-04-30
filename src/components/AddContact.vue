<template>
  <form @submit.prevent="addContactSubmit">
    <label for="name">Name</label>
    <input
      v-model="this.contact.name"
      type="text"
      name="name"
      placeholder="Enter name"
    />
    <label for="phone">Phone number</label>
    <input
      v-model="this.contact.phone"
      type="text"
      name="phone"
      placeholder="Enter phone number"
    />
    <button>Add</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      contact: { name: '', phone: '' },
    };
  },
  methods: {
    ...mapActions({
      addContact: 'addContact',
    }),
    addContactSubmit() {
      this.contact.id = Date.now();
      this.$store.dispatch('addContact', this.contact);
      this.contact = {
        name: '',
        phone: '',
      };
    },
  },
};
</script>

<style></style>
