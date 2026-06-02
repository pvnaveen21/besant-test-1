import { useState } from "react"

function Controlled() {

    const [userValue, setUserValue] = useState('Hello !')

    const getUserValue = (event: any) => {
        console.log(event.target.value);
        setUserValue(event.target.value)
    }
    return (
        <>
            <h1>Controlled Component</h1>
            <input type="text" className="" onChange={getUserValue} value={userValue} />
            <button className="btn btn-success">Get Value</button>
        </>
    )
}

export default Controlled