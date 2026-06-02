import { Fragment } from "react/jsx-runtime"
import "./About.css"
import { useState } from 'react'
import Footer from "./Footer"
function About(){
     const [status, setStatus] = useState(false)
     const [parentName] =useState('Naveen pv')


    const toggleFun = () =>{
        setStatus(!status)
    }
    
    return(
        <Fragment>
            <p className={`text-center ${status ?'text-danger':'text-success'}`}>{status ? "Naveen pv" : "Addded more"}</p>

            <p className={`text-center ${status ?'text-danger':'text-success'}`}>{status ? "Naveen pv" : "Addded more"}</p>
            <h1>About Component</h1>

            <button className="btn btn-secondary" onClick={()=>toggleFun()}>Toggle</button>
            <hr />
            <Footer name={parentName} age="3"></Footer>
        </Fragment>
    )
}

export default About 

// onClick