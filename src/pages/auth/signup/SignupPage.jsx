import { useState } from "react";

export default function Signup () {
    const [authData, setAuthData] = useState({phone:0,email:""})

    const authFormSubmit = (e) => {
        e.preventDefault();
    }
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
                <input 
                    type="number" 
                    placeholder="" 
                    value={authData.phone} 
                    onChange={e=>setAuthData({...authData,phone:Number(e.target.value)})}
                    required
                />
                <input 
                    type="email" 
                    placeholder="" 
                    value={authData.email} 
                    onChange={e=>setAuthData({...authData,email:e.target.value})}
                    required
                />
                <button 
                    onClick={authFormSubmit}
                >Submit</button>
            </form>
        </>
    )
}