import React, { Component } from 'react';
import { FaDumbbell } from 'react-icons/fa';
import Product_Item from '../Product-Item';


class Top_Selling extends Component {
    renderProductList = () => {
        const { arrSelling } = this.props;
        return arrSelling.map((productItem, index) => {
            return (
                <Product_Item src={productItem.img} alt={productItem.name} name={productItem.name} prices={productItem.price}
                    priceLength={productItem.price.length} color={productItem.color} colorLength={productItem.color.length} sale={productItem.sale} />
            )
        })
    }


    render() {
        
        return (
            <section className="section-top-selling">
                <div className="container">
                    <div className="block-title-top">
                        <h2 className="section-title mt-20 mb-20">TOP SELLING</h2>
                        <i className="mt-20 mb-20"><FaDumbbell /></i>
                        <p className="mt-10 mb-10">Whether your goals are to improve weight or body composition, increase
                            strength and function, or
                            improve overall</p>
                        <p className="mt-10 mb-10">health, resistance training can help you get there.</p>
                    </div>
                    <ul className="product-list flex-around row mt-20 mb-20">
                        {this.renderProductList()}
                    </ul>
                </div>
            </section>
        )
    }
}
export default Top_Selling;