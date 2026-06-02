import { useNavigate } from "react-router-dom"

function Logout() {
    const route = useNavigate()
    const logoutFun = () => {
        localStorage.removeItem('refresh')
        route('login')
    }
    return (
        <>
            <button className="btn btn-danger" onClick={() => logoutFun()}>Log out</button></>
    )
}

export default Logout