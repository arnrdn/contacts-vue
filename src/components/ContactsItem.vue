<template>
  <li class="contacts-list__item">
    <h4 class="contacts-list__name">{{ contact.name }}</h4>
    <h5 class="contacts-list__phone">{{ contact.phone }}</h5>
    <button @click="openModalAndSendId(contact.id)">Edit</button>
    <button class="delete" @click="$emit('remove', contact)">Delete</button>
  </li>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions({
      commitIsModalOpen: 'commitIsModalOpen',
      commitSetEditId: 'commitSetEditId',
    }),
    openModalAndSendId(id) {
      this.$store.dispatch('commitIsModalOpen', true);
      this.$store.dispatch('commitSetEditId', id);
    },
  },
  computed: {
    ...mapState({
      editId: (state) => state.editId,
    }),
  },
};
</script>

<style></style>
