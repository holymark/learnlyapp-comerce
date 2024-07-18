import { GetterTree } from 'vuex';
import type { State } from './state';

export type Getters = {
  isAuthenticated(state: State): boolean;
  allProducts(state: State): State['products'];
}

export const getters: GetterTree<State, State> & Getters = {
  isAuthenticated: (state: State) => !!state.user,
  allProducts: (state: State) => state.products
};
