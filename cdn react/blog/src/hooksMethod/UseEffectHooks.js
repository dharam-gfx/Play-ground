import React,{useEffect,useState}  from "react";
function UseEffectHooks(props){
let [count,setCount]=useState(0)
    useEffect(()=>{
        // console.log("Use EffectHooks count");
    },[count])
    useEffect(()=>{
        // console.log("Use EffectHooks props.data");
    },[props.data])
    return(
        <div>
            <h1> UseEffectHooks  count- {count} </h1>
            <h1> UseEffectHooks props.data-  {props.data} </h1>
            <button className="btn btn-secondary" 
            onClick={()=>{setCount(count+1)}}
            > count </button>
            <button className="btn btn-warning" 
            onClick={()=>{props.setDataFromChild(props.data + 1)}}
            > props data </button>
        </div>
    )
}
export default UseEffectHooks;