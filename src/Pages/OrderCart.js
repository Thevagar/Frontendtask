import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
const OrderCart = () => {
  const {productId} = useParams()
  const [quantity, setQuantity] = useState(0)

  const handleQuantity = (e)=> {
    setQuantity(parseInt(e.target.value))
  }

  const handleOrder = ()=> {
    console.log(quantity, 'QUANTITY')
    console.log(productId, 'PRODUCTID')
    axios.post('https://uiexercise.onemindindia.com/api/OrderProducts', {
      productId,
      quantity
    }).then(res=> {
      if (res.data) {
        console.log('SUCCESS')
        alert("Order placed successfully");
      }
    })
  }

  return (
    <div>
      <p>Product Id <b>{productId}</b></p>
      <label htmlFor={'quantity'}>Quantity :</label>&nbsp;
      <input type={'number'} value={quantity} name={'quantity'} onChange={handleQuantity} />
      <button style={{marginLeft:"10px",backgroundColor:"dodgerblue",color:"white",border:"none",borderRadius:"5px"}} onClick={handleOrder}>Place Order</button>
    </div>
  )
}

export default OrderCart