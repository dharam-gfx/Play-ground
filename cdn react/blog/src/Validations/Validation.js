class Validations {
    static checkName( name ) {
        if ( name.length >= 3 ) {
            return true;
        }
        else {
            return false;
        }
    };
    static checkEmail( email ) {
        if ( email.includes("@") ) {
            return true;
        }
        else {
            return false;
        }
    };
    static checkPassword( password ) {
        if ( password.trim().length >= 6 ) {
            return true;
        }
        else {
            return false;
        }
    }
}
export default Validations