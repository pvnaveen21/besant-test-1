import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Api() {
    const [data, setData] = useState([]);
    const { id } = useParams();

    const callAPI = () => {
        // fetch("https://jsonplaceholder.typicode.com/posts")
        //     .then(response => response.json())
        //     .then(json => setData(json))
        axios.get("https://jsonplaceholder.typicode.com/posts/")
            .then(response => setData(response.data))
            .catch(error => console.error("Error fetching data:", error));  
    }

    useEffect(() => {   
        console.log(id)
        callAPI();
    }, [])
    return (
        <>
        <h1>API Component</h1>
        <ul>
            {data.map((item:any) => <li key={item.id}>{item.title}</li>)}
        </ul>   
        </>
    )
}

export default Api