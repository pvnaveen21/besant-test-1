import { useContext } from "react"
import UserContext from "./UserContext"

function Step3(){
    const userContextValue = useContext(UserContext)
    console.log(userContextValue)
    return(
        <div>
            <h1>Step 3 Component</h1>
            <p>step 1 pass data - {userContextValue}</p>
        </div>
    )
}

export default Step3