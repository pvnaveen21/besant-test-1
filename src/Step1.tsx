import { useState } from "react"
import Step2 from "./Step2"
import UserContext from "./UserContext"

function Step1(){
    const [state] = useState("Naveen pv")
    return(
        <>
        <UserContext.Provider value={state}>      
            <h1>Step 1 Component</h1>
            <Step2></Step2>
        </UserContext.Provider>
        </>
    )
}

export default Step1