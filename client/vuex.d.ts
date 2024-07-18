import type { Products } from '@/types'
import {
  Store,
  createStore,
  useStore,
  MutationTree,
  ActionTree,
  ActionContext,
  GetterTree,
  DispatchOptions,
  CommitOptions
} from 'vuex'

declare module '@vue/runtime-core' {
  interface State {
    user: string
    products: Products
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}

export {
  Store,
  createStore,
  useStore,
  MutationTree,
  ActionTree,
  ActionContext,
  GetterTree,
  DispatchOptions,
  CommitOptions
}
