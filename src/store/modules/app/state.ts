import { getLocale } from "@/locales/lang"

export interface AppState {
  language: string
}

export const state: AppState = {
  language: getLocale()
}