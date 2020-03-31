import { Subject } from './types'

const createSubject = <T>(initialState: T): Subject<T> => {
  const observers: ((state: T) => void)[] = []
  let state = initialState

  return {
    subscribe: (fn: (state: T) => void) => {
      observers.push(fn)

      return () => observers.filter(subscriber => subscriber !== fn)
    },
    broadcast: (data: T) => {
      state = data

      observers.forEach(subscriber => subscriber(data))
    },
    getValue: () => state,
  }
}

export default createSubject
