import React from 'react';
import'./Product.css'

const Product = (props) => {
    console.log(props)
    return (
        <div>
            <p>{props.product.id}</p>
            <img src={props.product.image} alt="" />
        </div>
    );
};

export default Product;