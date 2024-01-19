
function PropsAsAFunction(props) {
    return(
        <div>
            <h1>Fun props</h1>
            <button  onClick={props.funProp}>Change prop value in pops class based component </button>
        </div>
    )
}

export default PropsAsAFunction;