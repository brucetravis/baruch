import React from 'react';
import './Cta.css';
import { motion } from 'framer-motion';

export default function Cta() {
  return (
    <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        //   whileInView={{ y: 0, opacity: 1 }}
        //   viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="cta-section container-fluid"
    >
      <h2 className="cta-title">Ready to Get Started?</h2>
      <p className="cta-subtitle">
        Contact us today to place an order for fresh eggs or high-quality poultry feeds.
      </p>
      <a 
        href="tel:+254729272643" 
        rel='noopener noreferrer'
        className="cta-button"
      >
        Get in Touch
      </a>
    </motion.div>
  );
}
