import React,{useContext} from "react";
import s from './header.module.css'
import { NavLink } from "react-router-dom";
import {Context} from '../../index'
import { useAuthState } from "react-firebase-hooks/auth";
import { LOGIN_ROUTE } from './../../router/routers';

let Header= (props) =>{
	const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return(
        <div>
            <header>
            <h3 className={s.header_title}>Hello World</h3>
            <div >
                {user ?
                <div className={s.icons}>
                    <div className={s.icon}>
                        <img  onClick={props.openKorz} src="img/cart.svg" alt=""></img>
                </div>

                   <div onClick={() => auth.signOut()} className={s.icon}> <h3 className={s.goOut}>Go Out</h3></div>
                </div>
                    :
                    <NavLink to={LOGIN_ROUTE}>
                        <div className={s.icon}> <h3>Login</h3></div>
                    </NavLink>
                }
            </div>
            </header>
        </div>
    )
}
export default Header  