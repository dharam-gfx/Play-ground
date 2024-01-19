import { useRef, useState } from "react"
import { Form, Button } from "react-bootstrap"
import ForwardRef from "./ForwardRef";

const UseRefHooks = () => {

    const [name, setName] = useState( "Dharam" );
    let inputName = useRef();
    let inputEmail = useRef("hello@gmail.com");
    const [email,setEmail] =useState("text@gamil.com")
    const submitFormData = ( e ) => {
        e.preventDefault();
        console.log( inputName );
        setName( inputName.current.value );
        setEmail(inputEmail.current.value );
        inputEmail.current.focus();
        inputEmail.current.style.backgroundColor= "red";

    }
    return (
        <>
            <h1>
                hello use Ref hooks
            </h1>

            <div>
                <Form onSubmit={submitFormData}>
                    <div className="mb-3 mt-3">
                        <label htmlFor="userName" className="form-label">Name:{name}  </label>
                        <input type="text" ref={inputName}
                            className="form-control" id="userName" placeholder="Enter Name" name="userName" />
                    </div>

                    <div className="mb-3 mt-3">
                        <ForwardRef email={email} ref={inputEmail }></ForwardRef>
                    </div>

                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        </>
    )
}
export default UseRefHooks