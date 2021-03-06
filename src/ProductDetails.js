import React from "react";
import {useParams, Link } from "react-router-dom";
import {useSelector}from "react-redux";
import CartIcons from "./CartIcons";
import "./ProductDetails.css";


const ProductDetails = () => {
    const {id} = useParams();
    const {name, price, image_url, description } = useSelector(state => ({
        ...state.products[id]
    }))

    return (
        <div className="row justify-content-center">
            <div className="col-md-4">
                <img   className="ProductDetails-img card-img-top" src={image_url} alt={name}/>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                    <h5>{name}</h5>
                    <p>${price}</p>
                    </div>
                    <p className="text-center">{description}</p>
                    <CartIcons id={id} />
                </div>
                <Link to="/" className="btn btn-block btn-link">Back</Link>
            </div>
        </div>
    )
}

export default ProductDetails;