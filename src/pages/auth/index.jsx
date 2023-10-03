import { Link, Outlet } from "react-router-dom";

import AuthImage from "../../../public/assets/images/dystopia.png"

import LinkLogo from "../../components/shared/LinkLogo"

import "./style/auth.css"

const Auth = () => {
    return (
        <div className="auth-page v-100 o-hidden d-flex">
            <div className="auth-form h-100 d-flex flex-column">
                <header className="auth-header-rq">
                    <LinkLogo />
                </header>
                <div className="form-space-rq h-100 d-flex flex-column w-100">
                    <Outlet />
                </div>
                <footer className="d-flex f-justify-between">
                    <Link
                        to="/privacy"
                    >
                        Privacy Policy
                    </Link>

                    <span>
                        Copyright@<Link to="/" target="_blank">RageQuit</Link> 2023
                    </span>
                </footer>
            </div>
            <div 
                className="auth-image h-100"
                style={{
                    backgroundImage: `url(${AuthImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom center',
                }}
                loading="lazy"
            ></div>
        </div>
    );
}

export default Auth;