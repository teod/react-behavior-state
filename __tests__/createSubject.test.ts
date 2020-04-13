import createSubject from './../src/createSubject'

const initialState = {
  a: 1,
  b: 2,
  c: 3,
}

const updateState = {
  a: 4,
  c: 5,
}

describe('createSubject', () => {
  test('default value', () => {
    const subject = createSubject(initialState)

    expect(subject.getValue()).toEqual(initialState)
  })

  test('broadcast notifies subscriber', () => {
    const subject = createSubject(initialState)

    const mockSubscribe = jest.fn(state => state)

    subject.subscribe(mockSubscribe)

    const updatedState = { ...initialState, ...updateState }

    subject.broadcast(updatedState)

    expect(mockSubscribe).toHaveBeenCalledWith(updatedState)

    expect(subject.getValue()).toEqual(updatedState)
  })
})
