/** @format */

import Vue from 'vue';
import Vuex from 'vuex';
import Music from '@/store/modules/Music';
import RickAndMorty from '@/store/modules/RickAndMorty';
import FirebaseCrud from '@/store/modules/FirebaseCrud';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Music,
    RickAndMorty,
    FirebaseCrud,
  },
});
