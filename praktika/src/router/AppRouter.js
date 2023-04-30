import {privatePage,publicPage} from './Router'
import {Route,Routes,Navigate} from 'react-router-dom'
import { LOGIN_ROUTE, CONTENT_ROUTE } from './routers'
import {useAuthState} from 'react-firebase-hooks/auth'
import { useContext } from 'react'
import { Context } from './../index';


 const AppRouter = () =>{
	const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return user ? (
    <Routes>
			{privatePage.map(({path, Component}) => (
				<Route key={path} path={path} element={Component} />
			))}
			<Route path='*' element={<Navigate to={CONTENT_ROUTE} exact ={true}/>} />
		</Routes>
    ):(
    <Routes>
			{publicPage.map(({path, Component}) => (
				<Route key={path} path={path} element={Component} />
			))}
			<Route path='*' element={<Navigate to={LOGIN_ROUTE} exact ={true} />} />
		</Routes>
    )
}
export default AppRouter
