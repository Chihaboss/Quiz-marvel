import React, {useState, Fragment, useContext, useEffect} from 'react'
import {FirebaseContext} from '../Firebase'
import Logout from '../Logout'
import Quiz from '../Quiz'

const Welcome = (props) => {
  
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    let listener = firebase.auth.onAuthStateChanged(user => {
      user ? setUserSession(user) : props.history.push('/');
    })
  
    return () => {
      listener()
    }
  }, [])
  
  
  
  const [userSession, setUserSession] = useState(null)
  
  return userSession === null ? (
    <Fragment>
    <div className='loader'></div>
    <p>Loading...</p>
    </Fragment>
  ) : <div className='quiz-bg'>
  <div className='container'>
 <Logout />
 <Quiz/>

</div>
</div>
  

}

export default Welcome