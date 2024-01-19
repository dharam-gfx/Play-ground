import React, { forwardRef, useState } from 'react'

const ForwardRef = (props,emailRef) => {
    console.log(emailRef);

  return (
    <><p>ForwardRef</p>
     <label htmlFor="email" className="form-label">Name:{props.email}  </label>
                        <input type="text" ref={emailRef}
                        className="form-control" id="email" placeholder="Enter Email" name="email" />
    </>
  )
}

export default forwardRef(ForwardRef)