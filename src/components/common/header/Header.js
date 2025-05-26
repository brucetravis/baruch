import React from 'react'
import './Header.css'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Header() {


    // use useLocatiion
    const location = useLocation()


  return (
    <motion.div
        initial={{ y: -100, opacity: 0  }}
        animate={{ y: 0, opacity: 1  }}
        transition={{ duration: 1, ease: "easeIn"  }}
    >
        <header>
            <nav className='navbar navbar-expand-md text-dark px-5'>
                <Link to='/' className={`navbar-brand ${location.pathname === '/'}`}>
                    <img 
                        src={require('../../../images/logo.jpg')} 
                        alt='Baruch logo' 
                        className='img-fluid '
                    />
                </Link>
                <button 
                    className='navbar-toggler' 
                    type='button' 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                    aria-controls="navabarNav"
                    aria-expanded="false" // When you click the button and open the menu, this changes to true.
                    aria-label='Toggle-navigation' // This button is for opening or closing the navigation menu.
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id="navbarNav">
                    <ul className='navbar-nav mx-auto'>
                        <li className='nav-item active'>
                            <Link to='/' className={`nav-link mx-5 ${location.pathname === '/' ? 'active' : ''}`}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item active'>
                            <Link to='/about' className={`nav-link mx-5 ${location.pathname === '/about' ? 'active' : ''}`}>
                                About
                            </Link>
                        </li>
                        <li className='nav-item active'>
                            <Link to='/products' className={`nav-link mx-5 ${location.pathname === '/products' ? 'active' : ''}`}>
                                Products
                            </Link>
                        </li>
                        <li className='nav-item active'>
                            <Link to='/orders' className={`nav-link mx-4 ${location.pathname === '/orders' ? 'active' : ''}`}>
                                Orders
                            </Link>
                        </li>
                        {/* <li className='nav-item active'>
                            <Link to='/faqs' className='nav-link mx-4'>
                                FAQ's
                            </Link>
                        </li> */}
                        <li className='nav-item active position-relative contacts-container'>
                            <Link className={`nav-link mx-5 ${location.pathname === '' ? 'active' : ''}`}>
                                Contact Us
                            </Link>

                            <ul className='contacts-dropdown position-absolute d-flex flex-column justify-content-center'>
                                <li className='whatsapp p-1'>
                                    <a
                                        href='https://wa.me/254729272643'
                                        rel='noopener noreferrer'
                                    >
                                        Whatapp
                                    </a>
                                </li>
                                <li className='call p-1 mt-1'>
                                    <a
                                        href='tel:+254729272643'
                                        rel='noopener noreferrer'
                                        className=''
                                    >
                                        Call
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className='navbar-nav mx-auto gap-1'>
                        <li className='nav-item actve mb-2 mt-3'>
                            <Link to='/orders' className='header-btn mx-4'>
                                Place Order
                            </Link>
                        </li>
                        <li className='nav-item active mt-3 mb-3 mb-sm-3 '>
                            <Link to='/products' className='header-btn mx-4 '>
                                Shop Now
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    </motion.div>
  )
}
