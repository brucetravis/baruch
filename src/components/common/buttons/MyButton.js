import React from 'react'
import './MyButton.css'
import { Link } from 'react-router-dom'

export default function MyButton({ text, link }) {
  return (
    <div>
        <Link to={link} className='navigate-btn'>
            {text}
        </Link>
    </div>
  )
}
