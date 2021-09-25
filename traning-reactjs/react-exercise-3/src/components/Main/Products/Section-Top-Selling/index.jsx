import React, { Component } from 'react';
import { FaDumbbell } from 'react-icons/fa';
import Product_Item from '../Product-Item';


class Top_Selling extends Component {
    render() {
        return (
            <section className="section-top-selling">
                <div className="container">
                    <div className="block-title-top">
                        <h2 className="section-title mt-20 mb-20">TOP SELLING</h2>
                        <i className="mt-20 mb-20"><FaDumbbell/></i>
                        <p className="mt-10 mb-10">Whether your goals are to improve weight or body composition, increase
                            strength and function, or
                            improve overall</p>
                        <p className="mt-10 mb-10">health, resistance training can help you get there.</p>
                    </div>
                    <ul className="product-list flex-around row mt-20 mb-20">
                        <Product_Item/>
                        <Product_Item/>
                        <Product_Item/>
                        <Product_Item/>
                        <Product_Item/>
                        <Product_Item/>
                        <Product_Item/>
                        <Product_Item/>
                    </ul>
                </div>
            </section>
        )
    }
}
export default Top_Selling;