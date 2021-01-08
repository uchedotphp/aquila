import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "",
    twitter: "",
    snapchat: "",
    instagram: "",
    email: "",
  },
  mutations: {
    SAVE_DATA(state, payload) {
      state.name = payload.name;
      state.email = payload.social_media.email;
      state.instagram = payload.social_media.instagram;
      state.snapchat = payload.social_media.snapchat;
      state.twitter = payload.social_media.twitter;
    },
  },
  actions: {
    fetchData({ commit }) {
      axios.get("https://hirng-x2021.glitch.me/api").then(({ data }) => {
        console.log(data.social_media);
        commit("SAVE_DATA", data);
      });
    },
  },
  getters: {
    name: (state) => state.name,
    twitter: (state) => state.twitter,
    snapchat: (state) => state.snapchat,
    instagram: (state) => state.instagram,
    email: (state) => state.email,
  },
});
