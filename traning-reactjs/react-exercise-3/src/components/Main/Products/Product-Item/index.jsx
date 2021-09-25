import React, { Component } from 'react';
import { FaShoppingCart,FaEye } from "react-icons/fa";


class Product_Item extends Component {
    render() {
        return (
            <li className="product-item col-3 col-small-6 col-wide-3 col-large-3">
                <div className="product-item-img">
                    <a href="#">
                        <img src="./template/asset/img/pr-04.jpg" alt="product-item" />
                    </a>
                    <div className="btn-view-cart bottom-right display-none">
                        <a className="top"><i><FaEye /></i></a>
                        <a className="bottom"><i><FaShoppingCart /></i></a>
                    </div>
                </div>
                <div className="product-info">
                    <h3 className="product-name m-10"><a href> Nike As Dri-Fit Training</a></h3>
                    <p className="product-price">$65.00</p>
                    <ul className="product-color flex-center-X pt-10 pb-10">
                        <li className="product-color-black ml-5 mr-5" />
                        <li className="product-color-blue ml-5 mr-5" />
                        <li className="product-color-pink ml-5 mr-5" />
                    </ul>
                </div>
            </li>
        )
    }
}
export default Product_Item;