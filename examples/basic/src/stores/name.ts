import { createStore, useSharedState } from 'react-behavior-state'

interface State {
  firstName: string
  lastName: string
}

const initialState = {
  firstName: '',
  lastName: '',
}

export const store = createStore<State>(initialState)

export const useNameState = () => useSharedState(store)
