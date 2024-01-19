function Child(props){
    const nameList=["Ankit","Rohan","Mohit","Pawan"];
    props.getNameList(nameList);
    return (
        <div>
            <h1>Student List</h1>
            {/* <h4>name : {name}</h4> */}
            <button onClick={()=>{props.alertMsg("dhamra")}}>Click me</button>
            
        </div>
    )
}
export default Child;