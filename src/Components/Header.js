import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AddLIst from '../Pages/AddLIst'
import OrderCart from '../Pages/OrderCart'
import ProductList from '../Pages/ProductList'

const Header = () => {
    return (
        <>
            <div>
                <Navbar bg="dark" variant="dark" >
                    <Container>
                        <Navbar.Brand href="#home">Retail shop</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/product">Product</Nav.Link>
                            <Nav.Link href="/add">Add</Nav.Link>
                            {/* <Nav.Link href="order">Order</Nav.Link> */}
                        </Nav>
                    </Container>
                </Navbar>
            </div>

            <div>
                <Router>
                    <Routes>
                        <Route path='/product' element={<ProductList/>}/>
                        <Route path='/add' element={<AddLIst/>}/>
                        <Route path='/order/:productId' element={<OrderCart/>}/>
                    </Routes>
                </Router>
            </div>


        </>
    )
}
export default Header