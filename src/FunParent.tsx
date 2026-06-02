import { useCallback, useState } from "react";
import FunRender from "./FunRender";

function FunParent() {
    console.log("Parent render");
    const [name, setName] = useState("Added");
    const[count, setCount] = useState(0);
    const ChangeName = useCallback(()=>{
        setName("Naveen pv")
    }, []);

    return (
        <>
        <h1>Parent Component</h1>
        <p>my count -{count}</p>
        <button className="btn btn-success" onClick={()=>setCount(count+1)}>+ 1</button>   
        <hr />

        <FunRender name={name}  parentFun={ChangeName}></FunRender>
        </>
    )}

export default FunParent