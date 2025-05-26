import React, { useEffect, useState } from 'react'
import './OrdersForm.css'

export default function OrdersForm() {


  // states to update the search inputs
  const [ formData, setFormData ] = useState({
    fullName: '',
    phoneNumber: '',
    productType: '',
    quantityNumber: '',
    deliveryAddress: '',
    additionalNotes: ''

  }) // an initial state inputs in an object 

  // state to show the calculated price
  const [ isPrice, setIsPrice ] = useState(null) // initial state is null to hide the input initially



  // function to update handle the search input
  const handleSearch = (e) => {
    // Destructure to access values of name and value
    const { name, value } = e.target
    
    // Update the state with the value of the search input
    setFormData((prevData) => ({
      // spread out the object to access the all the data
      ...prevData,

      // Update each name input with the correct value
      [name]: value
    }))

  }


  // useEffect to watch out for the producttype and the quantity Number
  useEffect(() => {

    // Desctructure to get the product Type and quantity Number
    const { productType, quantityNumber } = formData

    // if the productType and the Quantity NUmber fields have been filled
    if (productType && quantityNumber) {

      // keep track of the price of each product
      let unitPrice = 0


      // object containing the product prices
      const prices = {
        broiler: 1200,
        layer: 1500,
        eggs: 350,
        feeds: 3000
      }

      // convert the prouductType to lower case 
      const productTypeLower = productType.toLowerCase()
      
      // if the productType includes specific inputs,
      if (productTypeLower.includes("broiler")) unitPrice = prices.broiler
      else if (productTypeLower.includes("layer")) unitPrice = prices.layer
      else if (productTypeLower.includes("eggs")) unitPrice = prices.eggs
      else if (productTypeLower.includes("feed")) unitPrice = prices.feeds


      // quantity of the products
      const quantity = parseInt(quantityNumber) || 0

      // Keep track of the total Price
      const totalPrice = quantity * unitPrice

      // Update the total Price
      setIsPrice(totalPrice > 0 ? totalPrice : 0)
    
    } else {
      // if one is missing hide the input
      setIsPrice(null)
    }


  }, [ formData.productType, formData.quantityNumber, formData ]) // watch out for changes in the profuct Type and quantity Number


  return (
    <form className='p-4 rounded orders-form'>
      <div className='row align-items-center justify-content-center mb-3'>
        <div className='col-md-6 mb-2 '>
          <label htmlFor='fullName' className='form-label'>Full Names</label>
          <input 
            type='text'
            name='fullName'
            placeholder='Full Names'
            value={formData.fullName}
            onChange={handleSearch}
            className='form-control'
          />
        </div>
        <div className='col-md-6 mb-2'>
          <label htmlFor='phone' className='form-label'>Phone Number</label>
          <input 
            type='tel'
            name='phoneNumber'
            placeholder='+254....'
            value={formData.phoneNumber}
            onChange={handleSearch}
            className='form-control'
          />
        </div>
      </div>

      {/* Product Type */}
      <div className='mb-3'>
        <label htmlFor='product' className='form-label'>Product (e.g., Eggs, Broilers, Layers...)</label>
        <input 
          type='text'
          name='productType'
          placeholder='Eggs, Broilers, Layers, Day Old etc'
          value={formData.productType}
          onChange={handleSearch}
          className='form-control'
        />
      </div>

      {/* Quantity */}
      <div className='mb-3'>
        <label htmlFor='quantity' className='form-label'>Quantity</label>
        <input 
          type='text'
          name='quantityNumber'
          placeholder='e.g. 3 crates or 20 broilers'
          value={formData.quantityNumber}
          onChange={handleSearch}
          className='form-control'

        />
      </div>

      {/* Total Price */}
      {isPrice !== null && (
        <div className='mb-3'>
          <label htmlFor='price' className='form-label'>Price</label>
          <input 
            type='text'
            name='totalPrice'
            placeholder='Ksh 450'
            value={isPrice}
            className='form-control'
            readOnly
          />
        </div>
      )}
      
      {/* Delivery Address */}
      <div className='mb-3'>
        <label htmlFor='delivery' className='form-label'>Delivery Address</label>
        <input 
          type='text'
          name='deliveryAddress'
          placeholder='Delivered To........'
          value={formData.deliveryAddress}
          onChange={handleSearch}
          className='form-control'

        />
      </div>

      {/* Additional Notes */}
      <div className='mb-3'>
        <label htmlFor='notes'>Additional Notes</label>
        <textarea 
          rows="3"
          name='additionalNotes'
          placeholder='Optional: Preffered time, Special Instructions' 
          value={formData.additionalNotes}
          onChange={handleSearch}
          className='form-control'
        >
        </textarea>
      </div>

      {/* Submit Button */}
      <div className='text-center'>
        <button type='submit' className='btn btn-warning px-4'>Place Order</button>
      </div>
    </form>
  )
}
