import axios from './axiosConfig'
import type { State, Product, User } from './state'
import { type Mutations, MutationTypes } from './mutations'

export enum ActionTypes {
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  ADD_PRODUCT = 'ADD_PRODUCT',
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT'
}

type ActionAugments = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
}
export type Actions = {
  [ActionTypes.FETCH_PRODUCTS](context: ActionAugments): void
  [ActionTypes.ADD_PRODUCT](context: ActionAugments, product: Product, token: string): void
  [ActionTypes.LOGIN](
    context: ActionAugments,
    credentials: { email: string; password: string }
  ): void
  [ActionTypes.LOGOUT](context: ActionAugments): void
}

export const actions: Actions = {
  async [ActionTypes.FETCH_PRODUCTS]({ commit }: { commit: Function }) {
    const { data } = await axios.get<Product[]>('/api/products')
    console.log(data)
    commit(MutationTypes.SET_PRODUCTS, data)
  },
  async [ActionTypes.ADD_PRODUCT](
    { commit }: { commit: Function },
    product: Product,
    token: string
  ) {
    const { data } = await axios.post<Product>('/api/product/create', product, {
      headers: { Authorization: token }
    })
    commit(MutationTypes.ADD_PRODUCT, data)
  },
  async [ActionTypes.LOGIN](
    { commit }: { commit: Function },
    credentials: { email: string; password: string }
  ) {
    const { data } = await axios.post<User>('/api/auth/login', credentials)
    commit(MutationTypes.SET_USER, data)
  },
  [ActionTypes.LOGOUT]({ commit }: { commit: Function }) {
    commit(MutationTypes.LOGOUT)
  }
}
