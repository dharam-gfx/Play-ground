import { useState } from "react";
import LoginValidation from '../Validations/LoginValidation'

const LoginForm = () => {
    let [userDetails, setUserDetails] = useState( {} );
    let [errors,setErrors] = useState({} );
    
    
    const submitForm = ( e ) => {
        
        e.preventDefault();
        let loginValidation = new LoginValidation( userDetails.userName, userDetails.email, userDetails.password, userDetails.remember );
        setErrors(loginValidation.checkValidation());

        console.log(Object.entries(errors).length);
    }


    return (
        <div>
            <form onSubmit={submitForm} className="text-start">
                <div className="mb-3 mt-3">
                    <label htmlFor="userName" className="form-label">Name: {userDetails.name}</label>
                    <input type="text"
                        onChange={( event ) => setUserDetails( { ...userDetails, userName: event.target.value } )}
                        className="form-control" id="userName" placeholder="Enter Name" name="userName" />
                    <p className="text-danger"> {errors.userName}</p>
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email"
                        onChange={( event ) => setUserDetails( { ...userDetails, email: event.target.value } )}
                        className="form-control" id="email" placeholder="Enter email" name="email" />
                    <p className="text-danger"> {errors.email}</p>

                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">Password:</label>
                    <input type="password"
                        onChange={( event ) => setUserDetails( { ...userDetails, password: event.target.value } )}
                        autoComplete="false" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                    <p className="text-danger"> {errors.password}</p>

                </div>
                <div className="form-check mb-3">
                    <label className="form-check-label">
                        <input className="form-check-input"
                            onChange={( event ) => setUserDetails( { ...userDetails, remember:!userDetails.remember} )}
                            type="checkbox" value={userDetails.remember}  name="remember" /> Remember me
                    </label>
                    <p className="text-danger"> {errors.remember}</p>

                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default LoginForm