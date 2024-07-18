import { ActionTree, ActionContext } from 'vuex';
import axios from './axiosConfig';
import type { State, Product, User } from './state';
import { type Mutations, MutationTypes } from './mutations';

export enum ActionTypes {
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  ADD_PRODUCT = 'ADD_PRODUCT',
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT'
}

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
}

export type Actions = {
  [ActionTypes.FETCH_PRODUCTS](context: ActionAugments): void;
  [ActionTypes.ADD_PRODUCT](context: ActionAugments, product: Product): void;
  [ActionTypes.LOGIN](context: ActionAugments, credentials: { email: string; password: string }): void;
  [ActionTypes.LOGOUT](context: ActionAugments): void;
}

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.FETCH_PRODUCTS]({ commit }:{ commit: Function }) {
    const { data } = await axios.get<Product[]>('/api/products');
    commit(MutationTypes.SET_PRODUCTS, data);
  },
  async [ActionTypes.ADD_PRODUCT]({ commit }:{ commit: Function }, product: Product) {
    const { data } = await axios.post<Product>('/api/products', product);
    commit(MutationTypes.ADD_PRODUCT, data);
  },
  async [ActionTypes.LOGIN]({ commit }: { commit: Function }, credentials: { email: string; password: string }) {
    const { data } = await axios.post<User>('/api/users/login', credentials);
    commit(MutationTypes.SET_USER, data);
  },
  [ActionTypes.LOGOUT]({ commit }: { commit: Function }) {
    commit(MutationTypes.LOGOUT);
  }
};
