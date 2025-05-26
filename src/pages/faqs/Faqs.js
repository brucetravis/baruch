import React, { useState } from 'react'
import './Faqs.css'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function Faqs() {

  // state to how the drop down
  const [ show, setShow ] = useState(null)


  // An array of questions and answers
  const queriesAndAnswers = [
    { question: "Do you deliver to my area?", answer: "We accept M-PESA, cash on delivery, and bank transfers."  },
    { question: "Are your chickens vaccinated?", answer: "Yes, all our birds are fully vaccinated and well taken care of to ensure they are healthy and disease-free." },
    { question: "Do I have to pay before delivery?", answer: "A small deposit is required to confirm your order, with the balance payable on delivery."  },
    { question: "What types of poultry do you sell?", answer: "We sell broilers, layers, and fresh farm eggs. We also offer high-quality poultry feeds." },
    { question: "How much does a broiler/layer cost?", answer: "Prices vary depending on weight and market demand. Please visit our Products page or contact us directly for current prices." },
    { question: "Is payment refundable if I cancel my order?", answer: "Yes, but cancellations must be made at least 12 hours before delivery. Refunds are processed within 2 business days." }
  ]


  return (
    <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeIn' }}
        className='faqs container-fluid'
    >
        <h4 className='fs-4 text-center faqs-title mb-4'>FAQ'S</h4>
        <div className='row align-items-center justify-content-center gap-2'>
          <div className='col-12 col-md-6 col-lg-5'>
            <div>
              {queriesAndAnswers.map(({question, answer}, index) => (
                <div 
                  key={index}
                  className='dropdown-content'
                >
                  <div
                    key={index}
                    onClick={() => setShow(show === index ? null : index)}
                    className='d-flex align-items-center justify-content-center gap-3 dropdown-question'
                  >
                    <p className='fs-5'>{question}</p>
                    { show === index ? <ChevronUp className='mb-3' /> : <ChevronDown className='mb-3' />}
                  </div>
                  { show === index && (
                    <p className='drop-down-answer'>
                      {answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-5'>
            <img 
              src={require('../../images/chicken-2.jpg')}
              alt='faq chicken'
              className='img-fluid faq-img'
            />
          </div>
        </div>

    </motion.div>
  )
}
