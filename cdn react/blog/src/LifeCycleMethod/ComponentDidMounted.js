import React from "react";

class ComponentDidMounted extends React.Component{
    constructor(){
        super();
        this.state={
            name:"Dharam"
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({name:"Radhe"});
            console.log("hello ");
        },2000)
        console.log("componentDidMount");
    }
    render(){
        return (
            <h1>ComponentDidMounted {this.state.name}</h1>
        )
    }
}

export default ComponentDidMounted