<template>
  <div
    @click="commitIsModalOpen(false)"
    v-if="isModalOpen === true"
    class="modal"
  >
    <form @click.stop class="modal__form" @submit.prevent="sendNewContact">
      <label for="name">Name</label>
      <input
        v-model="this.contact.name"
        type="text"
        name="name"
        placeholder="Edit name"
      />
      <label for="phone">Phone number</label>
      <input
        v-model="this.contact.phone"
        type="text"
        name="phone"
        placeholder="Edit phone number"
      />
      <button>Save</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  data() {
    return {
      contact: {
        name: '',
        phone: '',
      },
    };
  },
  computed: {
    ...mapState({
      isModalOpen: (state) => state.isModalOpen,
      editId: (state) => state.editId,
      contacts: (state) => state.contacts,
    }),
  },
  methods: {
    ...mapActions({
      commitIsModalOpen: 'commitIsModalOpen',
      editContact: 'editContact',
    }),
    sendNewContact() {
      this.contact.id = this.editId;
      this.editContact(this.contact);
      this.contact = {
        name: '',
        phone: '',
      };
      this.commitIsModalOpen(false);
    },
  },
};
</script>

<style lang="scss">
.modal {
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  &__form {
    background-color: #fff;
    padding: 15px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
}
</style>
