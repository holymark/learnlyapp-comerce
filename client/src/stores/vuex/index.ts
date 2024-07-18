import type { InjectionKey } from 'vue'
import { Store, createStore, useStore } from 'vuex'
import axios from 'axios'
import type { Products } from '@/types'

export interface State {
  user: string
  products: Products
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    user: null,
    products: []
  },
  mutations: {
    setProducts(state: State, products: Products) {
      state.products = products
    },
    setUser(state: State, user: string) {
      state.user = user
    }
  },

  actions: {
    fetchProducts({ commit }: { commit: Function }) {
      axios.get('/api/products').then((response) => {
        commit('setProducts', response.data)
      })
    },
    async login(
      { commit }: { commit: Function },
      credentials: { email: string; password: string }
    ) {
      return axios.post('/api/login', credentials).then((response) => {
        commit('setUser', response.data.user)
      })
    }
  }
})
