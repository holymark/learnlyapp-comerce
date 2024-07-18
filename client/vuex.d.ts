import { Store, createStore, useStore } from 'vuex'

declare module '@vue/runtime-core' {

    interface State {
      count: number
    }
  
    interface ComponentCustomProperties {
      $store: Store<State>
    }
  }

export { Store, createStore, useStore }
