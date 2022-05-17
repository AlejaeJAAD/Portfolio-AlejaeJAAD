/** @format */

import * as fb from '@/firebase';
import router from '@/router/index';

const state = {
  userProfile: {},
  isAuthenticated: false,
};

const mutations = {
  setUserProfile(state, val, authState) {
    state.isAuthenticated = !state.isAuthenticated;
    console.log(state.isAuthenticated);
    state.userProfile = val;
  },
};

const actions = {
  async register({ dispatch }, form) {
    //Sign up user
    const { user } = await fb.auth.createUserWithEmailAndPassword(
      form.email,
      form.password
    );

    //Create user profile object
    await fb.usersCollection.doc(user.uid).set({
      name: form.name,
    });

    //Fetch user profile
    dispatch('fetchUserProfile', user);
  },

  async login({ dispatch }, form) {
    //Sign in user
    const { user } = await fb.auth.signInWithEmailAndPassword(
      form.email,
      form.password
    );

    //Fetch user profile
    dispatch('fetchUserProfile', user);
  },

  async fetchUserProfile({ commit }, user) {
    //Fetch user profile
    const userProfile = await fb.usersCollection.doc(user.uid).get();

    //Set user profile
    commit('setUserProfile', userProfile.data());

    //Change route or redirect
    router.push('/crudLS/dashboard');
  },

  async logout({ commit }) {
    await fb.auth.signOut();
    commit('setUserProfile', {});

    router.push('/crudLS');
  },
};

const getters = {
  getUserProfile() {
    return state.userProfile;
  },
  getAuthenticated() {
    return state.isAuthenticated;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
