import Validation from './Validation';

class LoginValidation {
    constructor( name="",email="", password="" ,remember="") {
        this.name = name;
        this.email = email;
        this.password = password;
        this.remember = remember;
        console.log(this.remember);
    }
    checkValidation() {
        const errors = {};

        if ( !Validation.checkName( this.name ) ) {
            errors.userName = "userName is required";
        }
        if ( !Validation.checkEmail( this.email ) ) {
            errors.email = "email is required";
        }
        if ( !Validation.checkPassword( this.password ) ) {
            errors.password = "password is required";
        }
        if ( !this.remember) {
            errors.remember = "check box is required";
        }
        console.log(errors);
        return errors;
    }
}
export default LoginValidation
