import React, { useContext, useState } from 'react'
import userContext from '../context/userContext'

function Log() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { setUser } = useContext(userContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({ username, password })
    console.log("User set:", { username, password })
  }

  return (
    <div>
      <h2>Login</h2>
      <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        placeholder='Username' 
      />
      {'  '}
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder='Password' 
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Log
