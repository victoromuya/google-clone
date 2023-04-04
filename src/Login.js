import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { login } from './features/userSlice'
import {auth, provider } from './Firebase'
import { useDispatch } from 'react-redux'

function Login() {
const dispatch = useDispatch();
const signIn = () =>{
    auth.signInWithPopup(provider)
    .then(({user}) => {
        dispatch(login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
        }));
    })
    .catch((error) => alert(error.message));
}

  return (
    <div className='login'>
        <div className="login__container">
            <img src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" alt="" />
            <Button onClick={signIn} variant="contained" color="primary">Login</Button>
        </div>
    </div>
  )
}

export default Login
