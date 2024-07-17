import { Store, createStore, useStore } from 'vuex'

declare module '@vue/runtime-core' {
  interface State {
    user: string | null
  }

  export interface ComponentCustomProperties {
    $store: Store<State>
  }
}

export { Store, createStore, useStore }
