import Child from "../GetDataFromChild/Child";
import { useState } from "react";
function Parent(){
   let nameList=[];
    function getNameList (data){
        nameList=data;
        console.log("name -: ", data);
        // alertMsg(nameList)
        // return "hello"
   }

   const alertMsg=(name)=>{
    alert("Hello - "+ name)
   }
    return (
        <div>
            <Child name={"Dharam"} getNameList={getNameList} alertMsg={alertMsg}></Child>
            
        </div>
    )
}
export default Parent;