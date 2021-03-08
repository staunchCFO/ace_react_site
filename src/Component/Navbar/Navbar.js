import React, { useState} from 'react'
import {
    Collapse,
    Navbar,
    Nav,
    NavItem
} from 'reactstrap'
import {NavLink} from 'react-router-dom'
import OutsideClick from '../OutsideClick'
// import Logo from "../Assest/images/Group-434.svg"
//import Close from '../assets/images/close.png'

const NavHeader = (props) => {

    return (

        <Navbar expand="lg">
            <div className="container">
                <span className={`navbar-brand ${props.color}`}>
                    <img src={props.logo} alt="Logo" />
                    <span className="d-none d-md-inline ml-1">Ace Africa</span>
                </span>
                <button
                    className="ml-auto search-mobile d-lg-none"
                >
                    <img src={props.srh} alt="Search" />
                </button>
                <button
                    className="navbar-toggler"
                    onClick={props.toggle}
                    aria-expanded={props.isOpen}
                    type="button"
                >
                    <img src={props.menu} alt="Menu" />
                </button>
                    
                <Collapse isOpen={props.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <span onClick={props.toggle} className="nav-link d-lg-none">
                                <img src="" alt="Close" /> 
                            </span>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/for-organization' exact onClick={props.close} className={`nav-link ${props.color} pr-5`}>For Organizations</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/for-developers' onClick={props.close} className={`nav-link ${props.color}`}>For Talents</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    )
}

const MainNav = (props) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    const closeNavbar = () => {
        setIsOpen(false)
    }

    const contentWidth = document.getElementById('root').clientWidth;
    let navContent = (
        <NavHeader 
            isOpen={isOpen} 
            toggle={toggle} 
            color={props.color} 
            logo={props.logo} 
            menu={props.menu}
            srh={props.srh}
        />
    )
    if(contentWidth < 992){
        navContent = (
            <OutsideClick handleToggle={closeNavbar}>
                <NavHeader 
                    isOpen={isOpen} 
                    toggle={toggle} 
                    close={closeNavbar} 
                    color={props.color} 
                    logo={props.logo} 
                    menu={props.menu} 
                    srh={props.srh}
                />
            </OutsideClick>
        )
    }

    return (
        <>
            {navContent}
        </>
    )
}

export default MainNav