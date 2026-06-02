
function Footer(props:any) {
    console.log(props);
    

    return (
        <>
           <h1>Footer component</h1>
            <p>parent name - {props.name}</p>
            <p>parent age - {props.age}</p>
        </>
    )
}

export default Footer
