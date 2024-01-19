 let name="dharam";
 let alertBtn=()=>alert("Hello I'm react ")

 const Users=()=>{
    return (
        <div>
        <h2 >Welcome to the react {name} </h2>
        <button onClick={alertBtn}>Click me </button>
        </div>
    )
}
export default Users;