// import { createStore } from 'vuex'

// export default createStore({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
import { createStore, createLogger } from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
import { store as app, AppStore, AppState } from '@/store/modules/app'

export interface RootState {
  app: AppState
}

export type Store = AppStore<Pick<RootState, 'app'>>

// Plug in logger when in development environment
const debug = process.env.NODE_ENV !== 'production'
const plugins = debug ? [createLogger({})] : []
// Plug in session storage based persistence
// plugins.push(createPersistedState({ storage: window.sessionStorage }))

export const store = createStore({
  plugins,
  modules: {
    app
  }
})

export function useStore(): Store {
  return store as Store
}
