import { Link } from "react-router-dom";

import Logo from "../../../public/assets/images/logo.svg"

const LinkLogo = () => {
    const logState = false

    return (
        <Link
            to={logState ? "/" : "/landing"}
            className="flex-inline"
        >
            <img
                src={Logo}
                loading="eager"
                alt="Logo"
                width={189}
                height={64}
            />
        </Link>
    );
}

export default LinkLogo;