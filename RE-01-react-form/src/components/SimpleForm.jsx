import { useState } from 'react'
import logo from '../assets/react.svg'

const SimpleForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const submittedData = JSON.stringify({ email, password })
    console.log('btn-submit', submittedData)
  }

  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' />

        <form onSubmit={handleSubmit}>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='micorreo@correo.com'
            id='simple-email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button
            type='submit'
          >
            Login
          </button>
        </form>

      </div>
    </div>
  )
}
export default SimpleForm
