import React, { Component } from 'react';
import { FaTruck, FaHeadset, FaDonate } from "react-icons/fa";

class Service extends Component {
    render() {
        return (
            <li className="service-item col-4 col-small-12 col-medium-4 col-largest-4">
                <i><FaTruck /></i>
                <div className="service-item-info mt-10 mb-10">
                    <h4 className="section-sub-title pt-10 pb-10">FREE SHIPPING UK&amp;UK</h4>
                    <p>Free shipping on all orders above $100</p>
                </div>
            </li>
        )
    }
}
export default Service;