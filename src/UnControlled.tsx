import { useRef } from "react"

function UnControlled() {
    const userRef:any = useRef("")
    const getValue =()=>{
        console.log(userRef.current.value);
    }
    return (
        <>
            <h1>UnControlled Component</h1>
            <input type="text" className="" ref={userRef} />
            <button className="btn btn-success" onClick={()=>getValue()}>Get Value</button>
        </>
    )
}

export default UnControlled