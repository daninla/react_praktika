import AppMain from "../components/AppMain";
import Login from "../components/login/Login";
import { CONTENT_ROUTE, LOGIN_ROUTE } from "./routers";

export const privatePage = [{
    path:CONTENT_ROUTE,
    Component: <AppMain/>
}]

export const publicPage = [{
    path:LOGIN_ROUTE,
    Component: <Login/>
}]
