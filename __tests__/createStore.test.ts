import createStore from './../src/createStore'

const initialState = {
  a: 1,
  b: 2,
  c: 3,
}

const updateState = {
  a: 4,
  c: 5,
}

describe('createStore', () => {
  test('update store with value', () => {
    const store = createStore(initialState)

    store.update(updateState)

    expect(store.subject.getValue()).toEqual({
      ...initialState,
      ...updateState,
    })
  })

  test('update store with callback', () => {
    const store = createStore(initialState)

    store.update(state => ({
      ...state,
      ...updateState,
    }))

    expect(store.subject.getValue()).toEqual({
      ...initialState,
      ...updateState,
    })
  })
})
