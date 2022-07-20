import React, {useState} from 'react'

const Signup = () => {
  
const data = {
  psuedo: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const [loginData, setLoginData] = useState(data)

const handleChange = e => {
  setLoginData({...loginData, [e.target.id]: e.target.value});
}
 
const {psuedo, email, password, confirmPassword} = loginData;

const btn = psuedo ==='' || email === '' || password === '' || password !== confirmPassword ? 
<button disabled>Inscription</button> : <button>Inscription</button>
  
  
  
  
  
  return (
    <div className='SignUpLoginBox'>
        <div className='slContainer'>
           <div className='formBoxLeftSignup'>

          </div>
         <div className='formBoxRight'>
          <div className='formContent'>
           
          <h2>Inscription</h2>
            <form>
              
              <div className='inputBox'>
                <input onChange={handleChange} value={psuedo} type="text" id='psuedo' autoComplete='off' required/>
                <label htmlFor='psuedo'>Psuedo</label>
              </div>

              <div className='inputBox'>
                <input onChange={handleChange} value={email} type="email" id='email' autoComplete='off' required/>
                <label htmlFor='email'>Email</label>
              </div>


              <div className='inputBox'>
                <input onChange={handleChange} value={password} type="password" id='password' autoComplete='off' required/>
                <label htmlFor='password'>Mot de passe</label>
              </div>

              <div className='inputBox'>
                <input onChange={handleChange} value={confirmPassword} type="password" id='confirmPassword' autoComplete='off' required/>
                <label htmlFor='confirmPassword'>Confirmez vote mot de passe</label>
              </div>
              {btn}
            </form>
          </div>
          </div> 
        </div>
    </div>
  )
}

export default Signup