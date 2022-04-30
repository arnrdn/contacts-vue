<template>
  <div class="about">
    <modal-edit-contact></modal-edit-contact>
    <router-link to="/">Home</router-link>
    <h1>This is an about page</h1>
    <add-contact></add-contact>
    <contacts-list></contacts-list>
  </div>
</template>

<script>
import ModalEditContact from '@/components/ModalEditContact.vue';
import AddContact from '@/components/AddContact.vue';
import ContactsList from '@/components/ContactsList.vue';
export default {
  components: {
    ContactsList,
    AddContact,
    ModalEditContact,
  },
};
</script>
