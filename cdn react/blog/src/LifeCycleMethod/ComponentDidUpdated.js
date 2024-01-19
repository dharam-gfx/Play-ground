import React from "react";
class ComponentDidUpdated extends React.Component{

    constructor(){
        super();
        this.state={
            name:"Dharam",
            flag:true,
        }
    }
    
    shouldComponentUpdate(){
        return this.state.flag;
    }
    componentDidUpdate(prevProp,prevState,snapshot){
        // console.log("prevProp",prevProp);
        // console.log("prevState",prevState.name);
        if (prevState.name==="Radhe") {
            this.setState({name:"Dharam kumar"});
            this.setState({flag:false});
        }
    }
    render(){
        return(
            <>
            <h2>{this.state.name}</h2>
            <button className="btn btn-danger"
            onClick={()=>{this.setState({name:"Radhe"})}}
            >ComponentDidUpdated</button>
            </>
        )
    }
}
export default ComponentDidUpdated