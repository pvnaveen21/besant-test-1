import { useState } from "react"

export default function ListRendering(){
    const [data, setData] = useState(["Person 1", "Person 2", "Person 3", "Person 4", "Person 5",])
    const [myobj, setMyObj] = useState([
        { name: "Person 10", age: 5, locaton: "chenna",  status:false},
        { name: "Person 20 ", age: 3, locaton: "chenna", status: true },
        { name: "Person 30", age: 2, locaton: "chenna", status: true },
        { name: "Person 40", age: 4, locaton: "chenna", status: false },
        { name: "Person 50", age: 6, locaton: "chenna", status: true }
    ])
    return(
        <>
            <h1>ListRendering</h1>
            {/* {data.map((value:any)=><p className={value=="Person 3" && 'text-success'}>{value}</p>)} */}
            {/* {data.map((value: String, index: any) => <p key={index} className={value == "Person 3" && 'text-success'}>{value}</p> )} */}

            {myobj.map((value: any, index: any)=>{
                return(
                    value.age > 3 && <p className={value.status &&'text-success'} > { value.name } {value.status && <span>*</span>}</p >
                )
            }
            )}
        </>
    )
}
