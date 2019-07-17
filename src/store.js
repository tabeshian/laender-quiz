import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import countries from "@/assets/geojson/countries.js";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gameIsRunning: false,
    randomCountries: [],
    round: 0,
    rounds: 5,
    score: 0,
    correctAnswer: false,
    selectedCountry: null
  },
  getters: {
    currentCountry(state) {
      return state.randomCountries[state.round]
    }
  },
  mutations: {
    startGame(state) {
      // reset game
      state.gameIsRunning = true
      state.round = state.score = state.currentCountry = 0
      const countrieNames = [];
      // get random countries
      const data = _.sampleSize(countries.features, state.rounds);
      data.map(country => {
        countrieNames.push(country.properties.NAME_DE);
      });
      // set state
      state.randomCountries = countrieNames
    },
    // select country
    selectCountry(state, country) {
      if (!state.gameIsRunning) {
        return
      }
      if (state.round >= state.rounds - 1) {
        state.gameIsRunning = false
      }
      if (state.randomCountries[state.round] == country) {
        state.correctAnswer = true
        state.score++
      } else {
        state.correctAnswer = false
      }
      state.round++
    }
  },
  actions: {}
})
