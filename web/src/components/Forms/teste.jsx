import React, { useState, useEffect, useRef } from 'react'

function PWCPW() {

    const password = useRef();
    const cPassword = useRef();
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [cPasswordClass, setCPasswordClass] = useState('form-control');
    const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);

    useEffect(() => {
        if (isCPasswordDirty) {
            if (password.current.value === cPassword.current.value) {
                setShowErrorMessage(false);
                setCPasswordClass('form-control is-valid')
            } else {
                setShowErrorMessage(true)
                setCPasswordClass('form-control is-invalid')
            }
        }
    }, [isCPasswordDirty])

    const checkPasswords = (e) => {
        setIsCPasswordDirty(true);
        if (isCPasswordDirty) {
            if (password.current.value === cPassword.current.value) {
                setShowErrorMessage(false);
                setCPasswordClass('form-control is-valid')
            } else {
                setShowErrorMessage(true)
                setCPasswordClass('form-control is-invalid')
            }
        }

    }

    return (
        <div className='container' >
            <form>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" ref={password} />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input type="password" className={cPasswordClass} id="confirmPassword" ref={cPassword}
                        onChange={checkPasswords} />
                </div>
                {showErrorMessage && isCPasswordDirty ? <div> Passwords did not match </div> : ''}

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default PWCPW