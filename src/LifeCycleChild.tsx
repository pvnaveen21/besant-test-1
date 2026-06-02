import { Component, PureComponent, type ReactNode } from "react";
import Log from "./Log";

export default class LifeCycleChild extends PureComponent{
    constructor(prop){
        super(prop)
        console.log("Child constructor");    
    }

    componentDidMount() {
        console.log("Child componentDidMount");
    }

    // shouldComponentUpdate() {
    //     console.log("Child shouldComponentUpdate");
    //     return true
    // }

    // componentDidUpdate() {
    //     console.log("Child componentDidUpdate");

    // }

    render() {
        console.log("Child render");
        return(
            <>
                <h1>Life Cycle Child</h1>
                <p>props - {this.props.name}</p>
            </>
        )
        
    }
}