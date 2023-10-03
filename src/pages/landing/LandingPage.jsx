import { Link } from "react-router-dom";

import ChildrenPlay from "../../../public/assets/images/banner-image.svg"

import "./style/landing.css"

import YouMatter from "../../components/shared/YouMatter"
import Footer from "../../components/structural/Footer"
import LinkLogo from "../../components/shared/LinkLogo";

const LandingPage = () => {
    return (
        <div className="page-main-rq v-100 o-hidden d-flex flex-column">
            <header className="header">
                <LinkLogo />

                <Link
                    className="btn btn-inline text-uppercase btn-login"
                    to="/login"
                >
                Login
                </Link>
            </header>

            <div 
                className="main-home-rq"
            >
                <div className="content-home-rq">
                <div className="banner-home-rq">
                    <h1 className="text-uppercase"> <span>Ace</span> Your Niche</h1>
                    <YouMatter />
                </div>
                <section className="home-image-rq">
                    <img
                        src={ChildrenPlay}
                        alt="Children playing"
                        width={800}
                        height={685}
                        loading="eager"
                    />
                </section>
                </div>
                <Footer />
            </div>
        </div>
    );
}
 
export default LandingPage;