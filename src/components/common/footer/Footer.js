import React from 'react'
import './Footer.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Form from '../../forms/footerform/FooterForm'

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeIn" }}
      className='footer container-fluid py-5'
    >
      <div className='container'>
        <div className='row g-4'>

          {/* Logo */}
          <div className='col-12 col-md-6 col-lg-3 text-center text-md-start'>
            <img 
              src={require('../../../images/logo.jpg')} 
              alt='Baruch logo' 
              className='img-fluid mb-3'
            />
          </div>

          {/* Products */}
          <div className='col-6 col-md-6 col-lg-2'>
            <h4 className='footer-title'>Products</h4>
            <div className='d-flex flex-column gap-1'>
              <Link className='footer-link' to='/products#dayold'>Day Old</Link>
              <Link className='footer-link' to='/products#layers'>Layers</Link>
              <Link className='footer-link' to='/products#broilers'>Broilers</Link>
              <Link className='footer-link' to='/products#eggs'>Eggs</Link>
              <Link className='footer-link' to='/products'>Feeds</Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className='col-6 col-md-6 col-lg-2'>
            <h4 className='footer-title'>Quick Links</h4>
            <div className='d-flex flex-column gap-1'>
              <Link className='footer-link' to='/about'>About</Link>
              <a
                href='tel:+254729272643' 
                rel='noopener noreferrer' 
                className='footer-link'
              >
                Contact
              </a>
              <Link className='footer-link' to='/orders'>Place Order</Link>
            </div>
          </div>

          {/* Contact */}
          <div className='col-12 col-md-6 col-lg-3'>
            <h4 className='footer-title'>Contact</h4>
            <div className='text-white-50 small'>
              <p>PHONE: +254 729 272 643</p>
              <p>EMAIL: info@chickenfresh.co.ke</p>
              <p>LOCATION: Nairobi, Kenya</p>
            </div>
          </div>

          {/* Form */}
          <div className='col-12 col-md-6 col-lg-2'>
            <h4 className='footer-title'>Newsletter</h4>
            <Form />
          </div>
          
        </div>
      </div>
    </motion.footer>
  )
}
