import createSubject from './createSubject'
import { UpdateFn } from './types'

const createStore = <T>(initialState: T) => {
  const subject = createSubject<T>(initialState)

  const update = (updater: UpdateFn<T> | Partial<T>) =>
    typeof updater === 'function'
      ? subject.broadcast((updater as UpdateFn<T>)(subject.getValue()))
      : subject.broadcast({ ...subject.getValue(), ...(updater as Partial<T>) })

  return {
    update,
    subject,
  }
}

export default createStore
