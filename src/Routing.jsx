import {react} from 'react'
import { Login } from './Components/LoginComponent/Login'
import DriverHomePage from './Components/DriversHomePage/DriverHomePage'
import AdminHomePage from './Components/AdminHomePage/AdminHomePage'
import { Provider } from 'react-redux'
import store from './Store/store'
const Routing=()=>{
    return(
        <>
        <Provider store={store}>
        {/* <Login></Login> */}
        {/* <DriverHomePage></DriverHomePage> */}
        <AdminHomePage></AdminHomePage>
        </Provider>
        </>
    )
}

export default Routing;