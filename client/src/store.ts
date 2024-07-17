import axios from 'axios'
import type { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store} from 'vuex'

export interface State {
  user: string
  products: any[]
}


export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    products:[],
    user: null
  },

  mutations: {
    setUser(state: State, user: string) {
      state.user = user
    },
    setProducts(state: State, products: any[]) {
      state.products = products
    }
  },
 actions: {
  fetchProducts({ commit }: { commit: Function }) {
    axios.get('/api/products').then(response => {
      commit('setProducts', response.data);
    });
  },

  login({ commit }: { commit: Function }, credentials: { username: string; password: string; }) {
    return axios.post('/api/login', credentials).then(response => {
      commit('setUser', response.data.user);
    });
  },
 },

})

export function useStore () {
    return baseUseStore(key)
  }


