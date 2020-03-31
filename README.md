# React Behavior State

A fully typed simple solution for global state in react without context using a BehaviourSubject observable pattern.

## Installation

```bash
yarn add react-behavior-state
```

## Usage
```typescript
import { createStore, useSharedState } from 'react-easy-state'

const initialState = {
  firstName: '',
  lastName: '',
}

const store = createStore(initialState)

const useNameState = () => useSharedState(store)

const Name = () => {
  const [name, setName] = useNameState()

  return (
    <div>
      <h1>{`${name.firstName} ${name.lastName}`}</h1>
      <input
        name="firstName"
        onChange={({ target: { value } }) => setName({ firstName: value })}
      />
      <input
        name="lastName"
        onChange={({ target: { value } }) =>
          // update function also accepts a callback
          setName(state => ({ ...state, lastName: value }))
        }
      />
    </div>
  )
}
```

#### With Typescript:
```typescript
import { createStore, useSharedState } from 'react-easy-state'

interface State {
  firstName: string
  lastName: string
}

const initialState = {
  firstName: '',
  lastName: '',
}

const store = createStore<State>(initialState)

const useNameState = () => useSharedState(store)

const Name = () => {
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
          setName(state => ({ ...state, lastName: value }))
        }
      />
    </div>
  )
}
```
