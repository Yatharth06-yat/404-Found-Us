import { NavLink } from 'react-router-dom'
import "./Footer.css";
const Footer = () => {
    return (
        <footer className='bg-blue-200' >
            <strong>&copy;</strong>
            <p>2025 CityCare Hospital. All rights reserved. | <NavLink to="/landing-page/home" style={{textDecoration: "underline"}}>Privacy Policy</NavLink></p>
        </footer>
    )
}

export default Footer