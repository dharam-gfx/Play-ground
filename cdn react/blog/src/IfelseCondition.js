import { useState } from "react"
const IfelseCondition = () => {
    const [isLoginIn, setLogin] = useState( 3 );
    // let isLoginIn=3;
    return (
        <div>
        
            <h1>IfelseCondition </h1>
            <hr/ >
            {
                isLoginIn === 1 ?
                    <h1>Welcome Dharam</h1>
                    : isLoginIn === 2 ?
                        <h1>Welcome kumar</h1>
                        : isLoginIn === 3 ?
                            <h1>Welcome dharam kumar</h1>
                            : <h1>Welcome Gust</h1>
            }
        </div>
    )
}
export default IfelseCondition