# React Behavior State

A fully typed simple solution for global state in react without context using a BehaviourSubject observable pattern.

## Installation

```bash
yarn add react-behavior-state
```

## Where and how this library should be used ?
In most cases you should stick to the `useState` hook, this library is by no means a replacement for the component's internal state.
This library can be used in instances where integrating context could be hard, impossible or there is no need to add context to your app.
For instance:
- Using react-native-navigation library with react-native.
- You need a shared state in the two different parts of the application, and you don't see the need to wrap a big chunk of your tree into a context that will be used just by two components.

This is a good overall replacement for big state libraries without any boilerplate and with proper typescript types.

I would not suggest using this library to handle your api state. There are better solutions to handle this (e.g. Apollo Client).

This library is extremely tiny when properly packed into your application's bundle it shouldn't add a considerate amount of code to it.

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

### Run the example
In order to run the example you need to clone the github repository:
```bash
cd examples/basic
yarn
yarn start
```
This will open a new webpack server on port 3000 by default.
