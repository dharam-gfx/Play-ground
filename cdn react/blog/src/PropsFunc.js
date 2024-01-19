function PropsFunc(props){
    return(
        <div style={{background:"red",margin:"20px", padding:"20px"}}>
            <hr/>

            <h4>Name: {props.student.name}</h4>
            <h4>Email : {props.student.email}</h4>
            <h4>{ props.other? "Email : " :"" }{props.other? props.other.altName : ""}</h4>
            
        </div>
    )
}

export default PropsFunc