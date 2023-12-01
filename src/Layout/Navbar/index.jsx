import React from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ? "green" : "black",
                                textDecoration: isActive ? "underline" : "",
                            };
                        }}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ? "green" : "black",
                                textDecoration: isActive ? "underline" : "",
                            };
                        }}
                    >
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ? "green" : "black",
                                textDecoration: isActive ? "underline" : "",
                            };
                        }}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/pruducts"
                        style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ? "green" : "black",
                                textDecoration: isActive ? "underline" : "",
                            };
                        }}
                    >
                        Products
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar