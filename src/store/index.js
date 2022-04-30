import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: () => ({
    contacts: [],
    isModalOpen: false,
    editId: 0,
  }),
  getters: {},
  mutations: {
    setContacts(state, contacts) {
      state.contacts = contacts;
    },
    setModalOpen(state, bool) {
      state.isModalOpen = bool;
    },
    setEditId(state, id) {
      state.editId = id;
    },
    removeContactFromList(state, contact) {
      state.contacts = state.contacts.filter((c) => c.id !== contact.id);
    },
    addContactToList(state, contact) {
      state.contacts.push(contact);
      console.log(state.contacts);
    },
    editContactById(state, newContact) {
      const id = state.editId;
      const itemIndex = state.contacts.findIndex((c) => c.id === id);
      state.contacts[itemIndex] = newContact;
    },
  },
  actions: {
    async fetchContacts({ commit }) {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        commit('setContacts', response.data);
      } catch (e) {
        console.log(e);
      }
    },
    removeContact({ commit }, contact) {
      commit('removeContactFromList', contact);
    },
    addContact({ commit }, contact) {
      commit('addContactToList', contact);
    },
    editContact({ commit }, newContact) {
      commit('editContactById', newContact);
    },
    commitIsModalOpen({ commit }, bool) {
      commit('setModalOpen', bool);
    },
    commitSetEditId({ commit }, id) {
      commit('setEditId', id);
    },
  },
});
