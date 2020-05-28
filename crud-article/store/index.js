/* import axios from '~/plugins/axios' */
import axios from 'axios'

export const state = () => ({
  articles: [],
  loading: true
})

export const getters = {
  articles: state => state.articles
}

export const mutations = {
  SET_LOADING(state, flag) {
    state.loading = flag
  },

  GET_POST(state, articles) {
    state.articles = articles
  },

  ADD_POST(state, payload) {
    state.articles.push(payload)
  },

  UP_VOTE(state, payload) {
    const articles = state.articles.find(p => p.id === payload.id)
    articles.vote++
  },

  DOWN_VOTE(state, payload) {
    const articles = state.articles.find(p => p.id === payload.id)
    articles.vote--
  },

  REMOVE_POST(state, payload) {
    const articles = state.articles
    articles.splice(articles.indexOf(payload.id), 1)
  }
}

export const actions = {
  getPost({ commit }) {
    commit('SET_LOADING', true)
    fetch('https://my-json-server.typicode.com/liankip/crud-article/posts', {
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => response.json())
      .then(todos => {
        commit('GET_POST', todos)
        commit('SET_LOADING', true)
      })
  },

  submitPost({ commit }, payload) {
    /* const { data } = await axios.post('posts', payload)
    commit('ADD_POST', data)
    commit('SET_LOADING', true) */
    /* if (!state.newTodo) {
      return
    } */

    fetch('https://my-json-server.typicode.com/liankip/crud-article/posts', {
      method: 'POST',
      body: JSON.stringify({
        payload
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then(() => {
      commit('ADD_POST', payload)
    })
  },

  voteUp({ commit }, payload) {
    fetch(
      `https://my-json-server.typicode.com/liankip/crud-article/posts/${payload.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      }
    ).then(() => {
      commit('UP_VOTE', payload)
    })
  },

  voteDown({ commit }, payload) {
    fetch(
      `https://my-json-server.typicode.com/liankip/crud-article/posts/${payload.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      }
    ).then(() => {
      commit('DOWN_VOTE', payload)
    })
  },

  removePost({ commit }, payload) {
    fetch(
      `https://my-json-server.typicode.com/liankip/crud-article/posts/${payload.id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      }
    ).then(() => {
      commit('REMOVE_POST', payload)
    })
    /* const { data } = await axios.delete(`posts/${payload.id}`)
    commit('REMOVE_POST', payload) */
  }
}
