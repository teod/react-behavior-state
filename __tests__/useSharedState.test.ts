import { renderHook, act } from '@testing-library/react-hooks'

import createStore from './../src/createStore'
import useSharedState from './../src/useSharedState'

const initialState = {
  a: 1,
  b: 2,
  c: 3,
}

const updateState = {
  a: 4,
  c: 5,
}

describe('useSharedState', () => {
  test('initial value', () => {
    const store = createStore(initialState)

    const { result } = renderHook(() => useSharedState(store))

    const [state] = result.current
    expect(state).toEqual(initialState)
  })

  test('state update', () => {
    const store = createStore(initialState)

    const { result } = renderHook(() => useSharedState(store))

    act(() => {
      result.current[1](updateState)
    })

    expect(result.current[0]).toEqual({ ...initialState, ...updateState })
  })
})
