import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidemenu from "./Sidemenu"
import Logout from "./Logout"

function Layout() {
    return (
        <>
            {/* <h1>Layout</h1> */}
            <Header></Header>
            <Logout></Logout>
            <Sidemenu></Sidemenu>
            <hr />
            <Outlet></Outlet>
        </>
    )
}

export default Layout