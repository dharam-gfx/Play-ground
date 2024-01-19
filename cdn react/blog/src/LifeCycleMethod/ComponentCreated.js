import React  from "react";

class ComponentCreated extends React.Component{
    constructor(){
        super();
        console.log("constructor");
    }
    render(){
        console.log("render method");

        return(
            <h1>Hello ComponentCreated</h1>
        )
    }
}
export  {ComponentCreated}