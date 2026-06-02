import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"

function Sidemenu() {
    const route = useNavigate()
    const [currentNav, setCurrentNav] = useState("")

    const currentPath = useLocation();
    useEffect(() => {
        setCurrentNav(currentPath.pathname.split('/').filter(Boolean)[0])
        console.log(currentNav)
    }, [currentPath])

    const routeFun = (type: any) => {
        if (type == 1) {
            route('/home')
        }
        else if (type == 3) {
            route('/lifecycle')
        }
        else if (type == 4) {
            route('/myhooks')
        }
        else if (type == 5) {
            route('/usecontext')
        }
        else if (type == 6) {
            route('/api')
        }
        else if (type == 7) {
            route('/crud')
        }
        else {
            route('/footer')
        }
    }
    return (
        <>
            <span onClick={() => routeFun(1)} style={{ cursor: "pointer" }} className={`me-4 ${currentNav === "home" ? "bg-success px-3 py-2 rounded-3" : ""}`}>Home</span>
            <span onClick={() => routeFun(2)} style={{ cursor: "pointer" }} className={`me-4 ${currentNav === "footer" ? "bg-success px-3 py-2 rounded-3" : ""}`}>Footer</span>
            <span onClick={() => routeFun(3)} style={{ cursor: "pointer" }} className={`me-4 ${currentNav === "lifecycle" ? "bg-success px-3 py-2 rounded-3" : ""}`}>lifecycle</span>
            <span onClick={() => routeFun(4)} style={{ cursor: "pointer" }} className={`me-4 ${currentNav === "myhooks" ? "bg-success px-3 py-2 rounded-3" : ""}`}>myhooks</span>
            <span onClick={() => routeFun(5)} style={{ cursor: "pointer" }} className={`me-4 ${currentNav === "usecontext" ? "bg-success px-3 py-2 rounded-3" : ""}`}>usecontext</span>
            <span onClick={() => routeFun(6)} style={{ cursor: "pointer" }} className={`me-4 ${currentNav === "api" ? "bg-success px-3 py-2 rounded-3" : ""}`}>api</span>
            <span onClick={() => routeFun(7)} style={{ cursor: "pointer" }} className={`me-4 ${currentNav === "crud" ? "bg-success px-3 py-2 rounded-3" : ""}`}>crud</span>



        </>
    )
}

export default Sidemenu
