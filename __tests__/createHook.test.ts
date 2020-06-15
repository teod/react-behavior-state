import { renderHook, act } from '@testing-library/react-hooks'

import createStore from './../src/createStore'
import createHook from './../src/createHook'

const initialState = {
  a: 1,
  b: 2,
  c: 3,
}

const updateState = {
  a: 4,
  c: 5,
}

describe('createHook', () => {
  test('initial value', () => {
    const store = createStore(initialState)

    const { result } = renderHook(() => createHook(store))

    const [state] = result.current
    expect(state).toEqual(initialState)
  })

  test('state update', () => {
    const store = createStore(initialState)

    const { result } = renderHook(() => createHook(store))

    act(() => {
      result.current[1](updateState)
    })

    expect(result.current[0]).toEqual({ ...initialState, ...updateState })
  })
})
