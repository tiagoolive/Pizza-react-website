import React from 'react'
import { Nav, NavLink, Bar, NavIcon } from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">Pizza</NavLink>
                <NavIcon>
                    <p>Menu</p>
                    <Bar />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar
