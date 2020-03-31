# React Easy State

A fully typed simple solution for global state in react without context using a BehaviourSubject observable pattern.

## Installation

```bash
yarn add react-easy-state
```

## Usage

Examples are written with typescript, but you can still use plain javascript if you prefer.

```typescript
// nameStore.ts
import { createStore, useSharedState } from 'react-easy-state'

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

// Name.tsx
import { useNameState } from '../stores/name'

export default () => {
  const [name, setName] = useNameState()

  return (
    <div>
      <h1>{`${name?.firstName} ${name?.lastName}`}</h1>
      <input
        name="firstName"
        onChange={({ target: { value } }) => setName({ firstName: value })}
      />
      <input
        name="lastName"
        onChange={({ target: { value } }) =>
          // update function also accepts a callback
          setName(state => ({ ...state, firstName: value }))
        }
      />
    </div>
  )
}
```
