import React, { useContext } from 'react';
import s from './login.module.css'
import { Context } from './../../index';
import firebase from 'firebase/compat/app';


const Login = () => {
    const {auth} = useContext(Context)

    const login = async() =>{
      const provider =  new firebase.auth.GoogleAuthProvider()
      const {user} = await auth.signInWithPopup(provider)
      console.log(user)
    }
    return (
        <div className={s.login_conteiner}>
            <button className={s.button} onClick={login}>Зареєструватися</button>
        </div>
    );
};

export default Login;