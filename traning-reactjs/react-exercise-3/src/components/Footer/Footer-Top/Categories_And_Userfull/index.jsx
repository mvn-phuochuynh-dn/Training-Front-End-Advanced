import React, { Component } from 'react'
import { FaPlus } from 'react-icons/fa'

class Categories_UserFull extends Component {
    render() {
        return (
            <li className="block-child col-2 col-small-12 col-medium-6 col-large-6 col-largest-2">
                <div className="title-medium display-none row">
                    <h3 className="footer-title mb-20 col-10">Categories</h3>
                    <a className="col-2" href><i><FaPlus/></i></a>
                </div>
                <div className="block-child-content">
                    <h3 className="footer-title mb-20">Categories</h3>
                    <ul className="footer-list">
                        <li className="footer-item"><a className="hover-blue" href="#">Celebrations</a></li>
                        <li className="footer-item"><a className="hover-blue" href="#">Events</a></li>
                        <li className="footer-item"><a className="hover-blue" href="#">Home Decore</a></li>
                        <li className="footer-item"><a className="hover-blue" href="#">Seasonal Bouquet</a></li>
                        <li className="footer-item"><a className="hover-blue" href="#">Wending decor</a></li>
                    </ul>
                </div>
            </li>
        )
    }
}
export default Categories_UserFull;
