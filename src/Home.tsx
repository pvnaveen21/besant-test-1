// import { Component} from "react";
// interface myProps{
//     userName:any
// }

// interface myState{
//     name: any,
//     age:any
// }

// class Home extends Component<myProps, myState>{

//     constructor(props:any){
//         super(props);
//         this.state ={
//             name: 'added',
//             age:1
//         }
//     }
//     myFun =() =>{
//         this.setState({
//             name:'Naveen pv'
//         })
//     }
//     render() {
//         return (
//             <>
//                 <h1>My class </h1>
//                 <h1>parent value - {this.props.userName }</h1>
//                 <p>{this.state.name}</p>
//                 <button className="btn btn-success" onClick={()=>this.myFun()}>Add</button>
//             </>
//         )
//     }
// }
// export default Home

function Home(){
    return(
        <>
        <h1>Home</h1>
        </>
    )
}

export default Home