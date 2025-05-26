import React from 'react'
import './FooterForm.css'

export default function FooterForm() {
  return (
    <div>
        <form
            className=''
        >
            <label className='form-label text-white fs-5'>Ask Us:</label>
            <div className='d-flex flex-row justify-content-center'>
                <input type='text' placeholder='Questions & Queries' className='form-control order-input' />
                <button type='submit' className='form-button'>Submit</button>
            </div>
        </form>
    </div>
  )
}
