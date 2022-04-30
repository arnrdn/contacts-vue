<template>
  <div>Hello</div>
  <ul class="contacts-list">
    <contacts-item
      v-for="contact in contacts"
      :key="contact.id"
      :contact="contact"
      @remove="removeContact(contact)"
    />
  </ul>
</template>

<script>
import ContactsItem from '@/components/ContactsItem.vue';
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    ContactsItem,
  },
  methods: {
    ...mapActions({
      fetchContacts: 'fetchContacts',
      removeContact: 'removeContact',
    }),
  },
  mounted() {
    this.fetchContacts();
  },
  computed: {
    ...mapState({
      contacts: (state) => state.contacts,
    }),
  },
};
</script>

<style></style>
