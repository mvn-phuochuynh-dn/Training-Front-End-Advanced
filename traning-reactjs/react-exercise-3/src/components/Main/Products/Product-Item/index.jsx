import React, { Component } from 'react';
import { FaShoppingCart, FaEye } from "react-icons/fa";


class Product_Item extends Component {
    render() {
        let { src, alt, name, prices, priceLength, color, colorLength, sale } = this.props;
        return (
            <li className="product-item col-3 col-small-6 col-wide-3 col-large-3">
                <div className="product-item-img">
                    <a href="#">
                        <img src={src} alt={alt} />
                    </a>
                    <div className="btn-view-cart bottom-right display-none">
                        <a className="top"><i><FaEye /></i></a>
                        <a className="bottom"><i><FaShoppingCart /></i></a>
                    </div>
                    {sale ? <div class="top-right btn-sale">35%</div> : <></>}
                </div>
                <div className="product-info">
                    <h3 className="product-name m-10"><a href>{name}</a></h3>
                    {priceLength === 2
                        ? <p className="product-price">
                            <span>{"$" + prices[0] + ".00"}</span>
                            <span>{"$" + prices[1] + ".00"}</span>
                        </p>
                        : <p className="product-price">{"$" + prices + ".00"}</p>}
                    <ul className="product-color flex-center-X pt-10 pb-10">
                        {colorLength === 1
                            ? <li className={"ml-5 mr-5 product-color-" + color} />
                            : colorLength === 2
                                ? <>
                                    <li className={"ml-5 mr-5 product-color-" + color[0]} />
                                    <li className={"ml-5 mr-5 product-color-" + color[1]} />
                                </>
                                : colorLength === 3
                                    ? <>
                                        <li className={"ml-5 mr-5 product-color-" + color[0]} />
                                        <li className={"ml-5 mr-5 product-color-" + color[1]} />
                                        <li className={"ml-5 mr-5 product-color-" + color[2]} />
                                    </>
                                    : <></>

                        }
                    </ul>

                </div>
            </li>
        )
    }
}
export default Product_Item;