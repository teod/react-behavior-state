# React Behavior State

[![npm version](https://img.shields.io/npm/v/react-behavior-state.svg?style=flat-square)](https://www.npmjs.com/package/react-behavior-state)

[Install](#install) | [Why ?](#why) | [Usage](#usage) | [Typescript](#typescript) | [API](#api) | [Examples](#run-the-example)

A simple solution for global state in a React application without using [context](https://reactjs.org/docs/context.html).
Under the hood it uses a custom <b>BehaviorSubject</b> pattern inspired from [rxjs](https://www.learnrxjs.io/learn-rxjs/subjects/behaviorsubject).

## Install

<i>npm:</i>
```sh
npm install --save react-behavior-state
```

<i>yarn:</i>
```sh
yarn add react-behavior-state
```

## Why ?
In most cases you should stick to the `useState` hook, this library is by no means a replacement for the component's internal state.
This library can be used in instances where integrating context could be hard, impossible or there is no need to add context to your app.
For instance:
- Using react-native-navigation library with react-native.
- You need a shared state in the two different parts of the application, and you don't see the need to wrap a big chunk of your tree into a context that will be used just by two components.
- You don't want to add the boilerplate react's context comes with

This is a good overall replacement for big state libraries without any boilerplate and with proper typescript types.

This library is extremely tiny when properly packed into your application's bundle it shouldn't add a considerate amount of code to it.

## Usage

<b>stores/pets.js</b>
```javascript
import { createStore, createHook } from 'react-behavior-state'

const initialState = {
  kittens: ['Tigger', 'Tiger'],
  puppies: ['Max', 'Jake'],
}

const store = createStore(initialState)

export const usePets = () => createHook(store)
```

<b>components/PetsList.js</b>
```javascript
import { usePets } from 'store/pets'

const PetsList = () => {
  // pets represents the current state of the store
  // setPets is the updater function that
  // sets new the state of the store
  const [pets, setPets] = usePets()

  return (...)
}
```

<b>components/SetPets.js</b>
```javascript
import { usePets } from 'store/pets'

const PetsList = () => {
  const [, setPets] = usePets()

  const updateKittens = () => {
    // you can use a callback that will return
    // the current state of the store
    // in this case you have to extend the existing state
    setPets((currentPets) => ({
      ...currentPets,
      kittens: [...currentPets.kittens, 'Max', 'Smokey', 'Sam'],
    }))
    /*
      in => {
          kittens: ['Tigger', 'Tiger'],
          puppies: ['Max', 'Jake'],
      }

      out => {
        kittens: ['Tigger', 'Tiger', 'Max', 'Smokey', 'Sam'],
        puppies: ['Max', 'Jake'],
      }
    */
  }

  const updatePuppies = () => {
    // you can send the updated state directly as param
    // without a callback, in this case the existing
    // state will be extended from the one set as argument
    setPets({
      puppies: ['Buddy', 'Maggie', 'Bear'],
    })
    /*
      in => {
          kittens: ['Tigger', 'Tiger'],
          puppies: ['Max', 'Jake'],
      }

      out => {
        kittens: ['Tigger', 'Tiger'],
        puppies: ['Buddy', 'Maggie', 'Bear'],
      }
    */
  }

  return (...)
}
```

### Typescript

React Behavior State is written in typescript and all of the types are exported through the node module.

By default the state interface will be infered from the object provided as initial state.
You can provide your own interface to the `createStore` helper:
```js
interface State = {
  firstName: string
  lastName: string
}

const store = createStore<State>({ firstName: '', lastName: '' })
```

## API

#### `createStore(initialState: object)`

<table>
  <thead>
    <tr>
      <th align="left">Argument</th>
      <th align="left">Type</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>initialState</td>
      <td><code>object</code></td>
      <td>
        The initial state of the store represented by an object.
      </td>
    </tr>
  </tbody>
</table>

##### Returns:
The store object that can be passed to the `createHook` helper function for creating hooks for a specific store.

#### `createHook(store: Store)`

<table>
  <thead>
    <tr>
      <th align="left">Argument</th>
      <th align="left">Type</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>store</td>
      <td><code>Store</code></td>
      <td>
        The store object returned by the <code>createStore</code> helper.
      </td>
    </tr>
  </tbody>
</table>

##### Returns:
A react hook which returns an array with the <b>state</b> and the <b>setState</b> update function, the same exact api used by the react's `useState` hook.

### Run the example
In order to run the example you need to clone the github repository:
```bash
cd examples/basic
yarn
yarn start
```
This will open a new webpack server on port 3000 by default.
