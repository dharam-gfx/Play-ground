

const items = ["a", "b", "c", "d", "e"];

const ItemList = () => {
    return (
        <div className="text-start">
            <h1 >Hello w</h1>
            <ul>
                {items.map( ( item, index ) => <li style={{backgroundColor:'red' ,margin:'10px'}} key={index} onClick={() => { alert( "Hello - " + index ) }}> Name: {item}</li> )}
            </ul>
        </div>
    )
}
export default ItemList