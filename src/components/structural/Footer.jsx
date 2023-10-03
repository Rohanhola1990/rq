import { useState } from "react"

import "./style/footer.css"
import { Link } from "react-router-dom";

const footerDataSet = [
    "Subscription rate at it's lowest",
    "200+ matches ongoing",
    "400+ gamers online",
    "New merch in Store",
    "Mail @ support@ragequit.in for  a personalized demo"
]

export default function Footer () {
    const [footerInfo, setFooterInfo] = useState(footerDataSet);

    const renderFooter = () => [
        footerInfo?.map((el, i) => {
            return (
                <li key={i}>
                    {el}
                </li>
            )
        })
    ]
    return (
        <>
            <Link to="signup" className={`btn-inline btn-join-rq`}>Join Us</Link>
            <footer className={`footer`}>
                <ul>
                    {renderFooter()}
                </ul>
                <ul>
                    {renderFooter()}
                </ul>
            </footer>
        </>
    )
}