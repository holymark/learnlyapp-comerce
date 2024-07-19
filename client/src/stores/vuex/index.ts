import { createStore, Store as VuexStore } from 'vuex'
import { type State, state } from './state'
import { type Mutations, mutations } from './mutations'
import { type Actions, actions } from './actions'
import { type Getters, getters } from './getters'

export const store = createStore({
  state,
  mutations,
  actions,
  getters
})

export function useStore() {
  return store as Store
}

export type Store = Omit<VuexStore<State>, 'commit' | 'dispatch' | 'getters'> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: Object
  ): ReturnType<Mutations[K]>
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: Object
  ): ReturnType<Actions[K]>
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
}
