import React from 'react';

const ReviewItem = (props) => {
    // console.log(props);
    const {name,quantity,key,price} = props.product
    const reviewItemStyle = {
        borderBottom: "1px solid lightgrey",
        marginBottom: "5px",
        marginLeft: "200px",
        paddingBottom: "5px"
    }
    return (
        <div style = {reviewItemStyle} className = "review-item">
            <h4 className = "product-name">{name}</h4>
            <p>{quantity}</p>
            <p><small>${price}</small></p>
            <br />
            <button className = "main-button" onClick = {() => props.removeProduct(key)}>Remove</button>
        </div>
    );
};

export default ReviewItem;