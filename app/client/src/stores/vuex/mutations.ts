import type { State, Product, User } from './state'

export enum MutationTypes {
  SET_PRODUCTS = 'SET_PRODUCTS',
  ADD_PRODUCT = 'ADD_PRODUCT',
  SET_USER = 'SET_USER',
  LOGOUT = 'LOGOUT',
  SET_TOKEN = 'SET_TOKEN'
}

export type Mutations<S = State> = {
  [MutationTypes.SET_PRODUCTS](state: S, products: Product[]): void
  [MutationTypes.ADD_PRODUCT](state: S, product: Product): void
  [MutationTypes.SET_USER](state: S, user: User): void
  [MutationTypes.SET_TOKEN](state: S, user: User): void
  [MutationTypes.LOGOUT](state: S): void
}

export const mutations: Mutations = {
  [MutationTypes.SET_PRODUCTS](state: State, products: Product[]) {
    state.products = products
  },
  [MutationTypes.ADD_PRODUCT](state: State, product: Product) {
    state.products.push(product)
  },
  [MutationTypes.SET_USER](state: State, user: User) {
    state.user = user
  },
  [MutationTypes.SET_TOKEN](state: State, user: User) {
    state.token = user.token
  },
  [MutationTypes.LOGOUT](state: State) {
    state.user = null
  }
}
