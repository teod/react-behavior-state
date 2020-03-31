import React from 'react'
import { useNameState } from '../stores/name'

export default () => {
  const [name, setName] = useNameState()

  return (
    <div>
      <h1>{`${name?.firstName} ${name?.lastName}`}</h1>
      <label>First Name</label>
      <input
        name="firstName"
        onChange={({ target: { value } }) => setName({ firstName: value })}
      />
      <br />
      <label>Last Name</label>
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
