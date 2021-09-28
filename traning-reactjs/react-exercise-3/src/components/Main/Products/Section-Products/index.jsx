import React, { Component } from 'react';
// import Product_Item from '../Product-Item';
import data from '../../../../data/dataProducts.json'
import { FaShoppingCart, FaEye } from "react-icons/fa";
import Product_Item from '../Product-Item';


class Product_List extends Component {

    constructor(props) {
        super(props);
    }
   

    renderProductList = () => {
        const {arrProducts} = this.props;
        return arrProducts.map((productItem, index) => {
            return (
                <Product_Item src={productItem.img} alt={productItem.name} name={productItem.name} prices={productItem.price}
                priceLength={productItem.price.length} color={productItem.color} colorLength={productItem.color.length} sale={productItem.sale}/>
                // <li className="product-item col-3 col-small-6 col-wide-3 col-large-3">
                //     <div className="product-item-img">
                //         <a href="#">
                //             <img src={productItem.img} alt={productItem.name} />
                //         </a>
                //         <div className="btn-view-cart bottom-right display-none">
                //             <a className="top"><i><FaEye /></i></a>
                //             <a className="bottom"><i><FaShoppingCart /></i></a>
                //         </div>
                //     </div>
                //     <div className="product-info">
                //         <h3 className="product-name m-10"><a href>{productItem.name}</a></h3>
                //         {productItem.price.length === 2
                //             ? <p className="product-price">
                //                 <span>{"$" + productItem.price[0] + ".00"}</span>
                //                 <span>{"$" + productItem.price[1] + ".00"}</span>
                //             </p>
                //             : <p className="product-price">{"$" + productItem.price + ".00"}</p>}
                //         <ul className="product-color flex-center-X pt-10 pb-10">
                //             {productItem.color.map((color, index) => {
                //                 return <li className={"ml-5 mr-5 product-color-" + color  }/>
                //             })}
                //         </ul>

                //     </div>
                // </li>
            )
        })
    }

    render() {
        return (
            <section className="section-products mt-70 mb-70">
                <div className="container">
                    <div className="product-tab-list mt-20 mb-20">
                        <ul className="product-tab-menu">
                            <li className="tab-item color-black ml-20 pb-5">FEATURED</li>
                            <li className="tab-item color-black ml-20 pb-5">NEW ARRIVALS</li>
                            <li className="tab-item color-black ml-20 pb-5">ON SALE</li>
                        </ul>
                    </div>
                    <ul className="product-list flex-around row mt-20 mb-20">
                        {/* <Product_Item/>
                        <Product_Item/>
                        <Product_Item/>
                        <Product_Item/> */}
                        {this.renderProductList()}
                    </ul>
                </div>
            </section>
        )
    }
}
export default Product_List;