/** @format */
const state = {
  characters: [],
  charactersFilter: [],
};

const mutations = {
  setCharacters(state, characters) {
    state.characters = characters;
  },
  setCharactersFilter(state, characters) {
    state.charactersFilter = characters;
  },
};

const actions = {
  async getCharacters(context) {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      context.commit('setCharacters', data.results);
      context.commit('setCharactersFilter', data.results);
    } catch (error) {
      console.error(error);
    }
  },
  filterByStatus({ commit, state }, status) {
    const filter = state.characters.filter((character) => {
      return character.status.includes(status);
    });
    commit('setCharactersFilter', filter);
  },
  filterByName({ commit, state }, name) {
    const formatName = name.toLowerCase();
    const filter = state.characters.filter((character) => {
      const characterName = character.name.toLowerCase();
      if (characterName.includes(formatName)) {
        return character;
      }
    });
    commit('setCharactersFilter', filter);
  },
};

const getters = {
  getCharactersFilter() {
    return state.charactersFilter;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
