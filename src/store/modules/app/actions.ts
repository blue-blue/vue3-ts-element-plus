import { ActionTree, ActionContext } from 'vuex'

// eslint-disable-next-line import/no-cycle
import { RootState } from '@/store'
import { AppState } from './state'
import { Mutations } from './mutations'
import { AppMutationTypes } from './mutation-types'
import { AppActionTypes } from './action-types'
type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<AppState, RootState>, 'commit'>

export interface Actions {
  [AppActionTypes.ACTION_SET_LANGUAGE](
    { commit }: AugmentedActionContext,
    language: string
  ): void
}

export const actions: ActionTree<AppState, RootState> & Actions = {
  [AppActionTypes.ACTION_SET_LANGUAGE] ({ commit }, language: string) {
    commit(AppMutationTypes.SET_LANGUAGE, language)
  }
}