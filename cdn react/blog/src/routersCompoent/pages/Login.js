import { Button, Form, InputGroup } from "react-bootstrap"
import { isLogin, setLogin } from "../../Validations/Auth"
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Login = (props) => {
    let navigate = useNavigate();

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
            <Button className="mt-3" onClick={()=>{
                setLogin();
                props.logInfo(isLogin());
                navigate("/")
            }} >Login</Button>
        </div>

    )
}

export default Login