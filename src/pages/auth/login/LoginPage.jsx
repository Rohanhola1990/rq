import { useEffect, useState } from "react";

import { verifyForm } from "../../../helpers/helper"

import { RightIcon } from "../../../assets/images/Icons"
import { Link } from "react-router-dom";

export default function LoginPage() {
    const [authData, setAuthData] = useState({phone:"",email:""})
    const [errorState, setErrorState] = useState(null)

    const authFormSubmit = (e) => {
        e.preventDefault();

        let errorData = verifyForm(authData)

        if (errorData != null && (!errorData.phone && !errorData.email)) {
            if (errorData.phone && errorData.email) {
                console.log('errorData', errorData);
                setErrorState(null)
            } else {
                console.log('errorData', errorData);
                setErrorState(errorData)
            }
        } else {
            console.log('errorData', errorData);
            setErrorState(errorData)
        }
    }

    useEffect(() => {
        console.log('authData', authData);
    }, [authData])

    return (
        <>
            <section
                className="form-header"
            >
                <h2>Login to your account</h2>
                <p>Login to continue to your account. Please allow permission for location when prompted.</p>
            </section>
            <form
                onSubmit={authFormSubmit}
            >
                <div className={`form-element-wrapper ${errorState && !errorState?.phone ? 'error-element' : ''}`}>
                    <input 
                        type="text" 
                        placeholder="Please provide your cell-number with prefix" 
                        value={authData?.phone} 
                        onChange={e=>setAuthData({...authData,phone:e.target.value})}
                        className="form-element"
                        required
                    />
                    {errorState && !errorState?.phone && <span className="form-error">Single marega kya? Phone number de!</span>}
                </div>
                <div className={`form-element-wrapper ${errorState && !errorState?.email ? 'error-element' : ''}`}>
                    <input 
                        type="email" 
                        placeholder="Please provide your email"
                        value={authData?.email} 
                        onChange={e=>setAuthData({...authData,email:e.target.value})}
                        className="form-element"
                        required
                    />
                    {errorState && !errorState?.email && <span className="form-error">Email mange hain; De de!</span>}
                </div>
                <button 
                    onClick={authFormSubmit}
                    className="btn btn-form btn-gradient"
                >Submit<span className="btn-icon btn-icon-right"><RightIcon /></span></button>
            </form>
            <p className="form-option-text">
                Don’t have an account yet? <Link to="/auth/signup">Register now</Link>!
            </p>
        </>
    )
}