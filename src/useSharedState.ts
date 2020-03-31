import { useEffect, useState } from 'react'
import { Store, UpdateFn } from './types'

const useSharedState = <T = any>(
  store: Store<T>,
): [T, (arg0: UpdateFn<T> | Partial<T>) => void] => {
  const [state, setState] = useState(store.subject.getValue())

  useEffect(() => {
    const unsubscribe = store.subject.subscribe(s => setState(s))

    return () => {
      unsubscribe()
    }
  }, [])

  return [state, store.update]
}

export default useSharedState
