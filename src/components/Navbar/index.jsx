import React from 'react'
import { Nav, NavLink, Bar, NavIcon } from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to="/">Pizza</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bar />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar
