import React from "react";


function FunRender(props:any) {
    console.log("Child render");
    
    return (
        <>
        <h1>Child Component</h1>
        <p>Parent Name - {props.name}</p>
        <button className="btn btn-primary" onClick={()=>props.parentFun()}>Change Parent Name</button>                   
  
        </>
    )
}

export default React.memo(FunRender)