import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='fixed w-full flex bg-blue-200 justify-center gap-1 p-2 bottom-0'>
            <strong>&copy;</strong>
            <p>2025 CityCare Hospital. All rights reserved. | <NavLink to="/home" className={"underline"}>Privacy Policy </NavLink></p>
        </footer>
    )
}

export default Footer 