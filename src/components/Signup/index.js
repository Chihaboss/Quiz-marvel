import React, {useState, useContext} from 'react'
import {FirebaseContext} from '../Firebase'
import { Link, useNavigate } from 'react-router-dom';

const Signup = (props) => {

  const navigate = useNavigate();

  const firebase = useContext(FirebaseContext);
  
const data = {
  psuedo: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const [loginData, setLoginData] = useState(data)
const [error, setError] = useState('')

const handleChange = e => {
  setLoginData({...loginData, [e.target.id]: e.target.value});
}

const handleSubmit = e => {
  e.preventDefault();
  const { email, password, pseudo } = loginData;
  firebase.signupUser(email, password)
  .then( authUser => {
      return firebase.user(authUser.user.uid).set({
          pseudo,
          email
      })
  })
  .then(() => {
      setLoginData({...data});
      navigate('/welcome')
  })
  .catch(error => {
      setError(error);
      setLoginData({...data});
  })
}
 
const {psuedo, email, password, confirmPassword} = loginData;

const btn = psuedo ==='' || email === '' || password === '' || password !== confirmPassword ? 
<button disabled>Inscription</button> : <button>Inscription</button>
  
  
   // gestion erreurs
   const errorMsg = error !== '' && <span>{error.message}</span>;
  
  
  return (
    <div className='SignUpLoginBox'>
        <div className='slContainer'>
           <div className='formBoxLeftSignup'>

          </div>
         <div className='formBoxRight'>
          <div className='formContent'>
           {errorMsg}
          <h2>Inscription</h2>
            <form onSubmit={handleSubmit}>
              
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
            <div className='linkContainer'>
            <Link className='simpleLink' to='/login'>Deja inscrit? connectez vous</Link>
            </div>
          </div>
          </div> 
        </div>
    </div>
  )
}

export default Signup