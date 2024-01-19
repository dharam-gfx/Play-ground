import { Button, Form, InputGroup } from "react-bootstrap"
import { isLogin, setLogin } from "../../Validations/Auth"
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
    let navigate = useNavigate();

    function Login(){
        if(!isLogin()){
            setLogin();
        }
        navigate('home');
    }
    useEffect(()=>{
        if (isLogin()) {
            navigate("/");
          }
    },[localStorage])
    return (
        <div>
            <h4>Login</h4>

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password address</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" />
                </Form.Group>
               
            </Form>
            <Button className="mt-3" onClick={()=>{Login()}}>Login</Button>
        </div>

    )
}

export default Login