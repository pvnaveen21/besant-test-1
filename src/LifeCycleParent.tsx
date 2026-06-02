import { Component } from "react";

export default class LifeCycleParent extends Component {
    constructor(prop:any) {
        super(prop)
        console.log("parent constructor");
        this.state = {
            count: 0,
            userName: 'Unknown'
        }
    }
    myTimer: any = ''

    componentDidMount() {
        console.log("parent componentDidMount");
    }

    shouldComponentUpdate() {
        console.log("parent shouldComponentUpdate");
        return true
    }

    componentDidUpdate() {
        console.log("parent componentDidUpdate");

    }
    componentWillUnmount(): void {
        console.log("componentWillUnmount");
        clearInterval(this.myTimer)
    }

    render() {
        const countFun = () => {
            this.setState({
                // count: this.state.count + 1
            })
        }

        // const changeName = () => {
        //     this.setState({
        //         userName: 'Naveen pv'
        //     })
        // }

        console.log("parent render");
        return (
            <>
                <h1>Life Cycle Parent</h1>
                {/* <p>Count - {this.state.count}</p> */}
                <button className="btn btn-success" onClick={() => countFun()}>Add</button>
                <button className="btn btn-danger" onClick={() => this.setState({ userName:'Naveen pv'})}>Change Name</button>
                {/* <LifeCycleChild name={this.state.userName}></LifeCycleChild> */}
                {/* <FunRender name={this.state.userName}></FunRender> */}
            </>
        )

    }
}