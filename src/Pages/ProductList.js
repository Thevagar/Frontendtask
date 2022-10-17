import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom'

const ProductList = () => {
    const [list, setList] = useState([])
    const navigation = useNavigate()

    useEffect(() => {
        axios.get('https://uiexercise.onemindindia.com/api/Product')
            .then((res) => setList(res.data))
    }, [list]);

    const onOrderProduct = (productId)=> {
        navigation(`/order/${productId}`, {replace: true})
    }

    return (
        <div>
            <div className='headerText'>
                <h1>Product List</h1>
            </div>
            <div>
                <Table striped bordered hover>
                    <tr>
                        <td>Product Name</td>
                        <td>Product Id</td>
                        <td>Quantity</td>
                        <td></td>
                    </tr>
                {list.map((item) => (
                        <tr key={item.productId}>
                            <td>{item.productName}</td>
                            <td>{item.productId}</td>
                            <td>{item.availableQuantity}</td>
                            <td><button className='orderButton' onClick={()=> onOrderProduct(item.productId)}>Order</button></td>
                        </tr>
                ))}
                </Table>
            </div>
        </div>
    )
}

export default ProductList