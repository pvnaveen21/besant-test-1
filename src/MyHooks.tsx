import { useEffect, useRef, useState } from "react"

export default function MyHooks() {

    const [state, setState] = useState("Hello")
    const [count, setCount] = useState(0)
    const userRef:any = useRef("")

    useEffect(() => {
        console.log("Component DidMount")
        setCount(count + 1)
        focuseinput()
        return () => {
            console.log("Component Will Unmount Hook")
        }
    }   , [])

    const focuseinput = () => {
        userRef.current.focus()
    }




    return (
        <>
        <input type="text" className="form-control w-25" ref={userRef} /> 
        <button onClick={focuseinput} className="btn btn-primary mt-2">Focus Input</button>      
        <hr />
            <h1>Hooks component</h1>
            <h2>{state}</h2>
            <button onClick={() => setState("Welcome to Hooks")} className="btn btn-primary">
                Change State
            </button>
            <hr />
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)} className="btn btn-primary">
                Increment
            </button>
        </>
    )

}