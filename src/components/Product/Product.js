import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props.product)
    // console.log(props)
    const { name, img, seller, price, stock, key } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4><Link to={"/product/" + key}>{name}</Link></h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                
                {props.showAddToCart === true && <button className="main-button" onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> add to cart</button>
                }

            </div>

        </div>
    );
};

export default Product;