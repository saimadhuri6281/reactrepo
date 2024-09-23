import React, { useState } from 'react';
import { Col } from 'react-bootstrap'; 
import { productsData } from '../Data/Products1'; 
import { Link } from 'react-router-dom';

function Sports() {
    const [cart, setCart] = useState([]); 

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
        alert(`${product.ProductName} added to cart!`); 
    };

    return (
        <div className='maindata'>
            {/* Main content - Products */}
            <Col sm={10} className='product-content' style={{ paddingLeft: '5%', paddingRight: '5%' }}>
                <div className='product-list'>
                    {productsData.length > 0 ? (
                        productsData.map((e, index) => (
                            <div className='productdata' key={index}>
                                <Link to={`/sports/${index}`}>
                                    <img src={e.image} alt={e.ProductName} />
                                    <p>{e.ProductName}</p>
                                    <p>₹{e.price}</p>
                                </Link>
                                <button onClick={() => addToCart(e)}>Add to Cart</button>
                            </div>
                        ))
                    ) : (
                        <p>No products available</p>
                    )}
                </div>
            </Col>    
        </div>
    );
}

export default Sports;

