import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import {FirebaseContext} from '../Firebase'

const ForgetPassword = () => {
  
  const firebase = useContext(FirebaseContext)
  
    const [email, setEmail] = useState("")
  
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)
   
   
    const handleSubmit = e => {
        e.preventDefault();
        firebase.passwordReset(email)
        .then(()=>{
            setError(null)
            setSuccess(`Consultez votre email ${email}`)

        })
        .catch((error)=>{

        })
  }
  const disabled = email === '';
  
  
    return (
    <div className='signUpLoginBox'>
        <div className='slContainer'>
        <div className='formBoxLeftForget'></div>
        <div className='formBoxRight'>
          <div className='formContent'>
          
          <h2>Mot de passe oublie?</h2>
            <form onSubmit={handleSubmit}>
              
              

          <div className='inputBox'>
                <input onChange={e => setEmail(e.target.value)} value={email} type="email" autoComplete='off' required/>
                <label htmlFor='email'>Email</label>
          </div>

            <button disabled={disabled}>Recuperez votre mot de passe</button>           
            </form>
            <div className='linkContainer'>
            <Link className='simpleLink' to='/login'>Deja inscrit connectez vous.</Link>
            </div>
          </div>
          </div> 
        </div>
        </div>

  )
}

export default ForgetPassword