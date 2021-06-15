// 维护mutation用于更改Vuex的store中的language状态
import { MutationTree } from 'vuex'
import { AppState } from './state'
import { AppMutationTypes } from './mutation-types'
import { setLanguage } from '@/utils/cookies'

export type Mutations<S = AppState> = {
  [AppMutationTypes.SET_LANGUAGE](state: S, language: string): void
}

export const mutations: MutationTree<AppState> & Mutations = {
  [AppMutationTypes.SET_LANGUAGE] (state: AppState, language: string) {
    state.language = language
    setLanguage(state.language)
  }
}