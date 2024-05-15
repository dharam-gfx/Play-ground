import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AuthContainer = ( { children } ) => {
  const authenticated = useSelector( ( state ) => state.AuthReducer.userAuth.status );
  const emailVerification = useSelector( ( state ) => state.AuthReducer.userAuth.userInfo?.emailVerification );
  const navigate = useNavigate()
  useEffect( () => {
    if ( !authenticated ) {
      navigate( "/login" );
    }
    if ( !emailVerification ) {
      navigate( "/verify-email" );

    }
  }, [authenticated] )
  return (
    <>{children}</>
  )
}

export default AuthContainer