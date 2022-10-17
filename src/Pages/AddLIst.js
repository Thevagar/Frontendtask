import React, { useState } from 'react'
import axios from 'axios'

function AddLIst() {
  const [product, setProduct] = useState({
    productName: '',
    availableQuantity: 0
  })
  const handleChange = (e) => {
    setProduct(prev => ({
      ...prev,
      [e.target.name]: e.target.name == 'availableQuantity' ? parseInt(e.target.value) : e.target.value
    }))
  }

  const onSubmit = () => {
    axios.post('https://uiexercise.onemindindia.com/api/Product', product)
      .then((res) => {
        if (res.data) {
          console.log('success')
          alert("Product added successfully")
        }
      })
  }

  return (
    <div className='addContainer'>
      <div className='inputContainer'>
        <label htmlFor='productName'>Product Name </label>&nbsp;
        <input type={'text'} name='productName' value={product.productName} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor='availableQuantity'>Product Qty</label>&nbsp;
        <input style={{marginLeft:"19px"}} type={'number'} name='availableQuantity' value={product.availableQuantity} onChange={handleChange} />
      </div>
      <div className='buttonContainer'>
        <button className='button' onClick={onSubmit}>Add Product</button>
      </div>
    </div>
  )
}

export default AddLIst