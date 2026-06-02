import { useNavigate } from "react-router-dom"

function Log(){
    const route = useNavigate()

    const logFun = ()=>{
        localStorage.setItem('refresh', 'naveenpv21')
        route('/home')
    }
    return(
        <>
        <h1>Log</h1>
            <button className="btn btn-success" onClick={()=>logFun()}>Log in</button>
        </>
    )
}

export default Log