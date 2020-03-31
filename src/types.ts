export interface Subject<T> {
  subscribe: (fn: (state: T) => void) => () => ((state: T) => void)[]
  broadcast: (data: T) => void
  getValue: () => T
}

export type UpdateFn<T> = (state: T) => T

export interface Store<T> {
  update: (arg0: UpdateFn<T> | Partial<T>) => void
  subject: Subject<T>
}
