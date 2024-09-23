import React, { useState } from 'react';
import { Col } from 'react-bootstrap'; 
import { productsData } from '../Data/Products2'; // Your products data
import { Link } from 'react-router-dom';

function Game() {
    const [cart, setCart] = useState([]); // State to manage cart items

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
        alert(`${product.ProductName} added to cart!`); // Alert for confirmation
    };

    return (
        <div className='maindata'>
            {/* Main content - Products */}
            <Col sm={10} className='product-content' style={{ paddingLeft: '5%', paddingRight: '5%' }}>
                <div className='product-list'>
                    {productsData.length > 0 ? (
                        productsData.map((e, index) => (
                            <div className='productdata' key={index}>
                                <Link to={`/game/${index}`}>
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

export default Game;

