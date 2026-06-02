import { Navigate, Outlet } from "react-router-dom"

function AuthGuard(){
    const userStatus = !!localStorage.getItem('refresh')
    return(
        <>
            {userStatus ? <Outlet></Outlet> : <Navigate to= "/login" /> }
         </>
    )
}


export default AuthGuard