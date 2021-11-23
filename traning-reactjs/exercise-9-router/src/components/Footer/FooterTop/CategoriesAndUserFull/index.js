import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export default function CategoriesAndUserFull() {
    return (
        <li className="block-child col-2 col-small-12 col-medium-6 col-large-6 col-largest-2">
                <div className="title-medium display-none row">
                    <h3 className="footer-title mb-20 col-10">Categories</h3>
                    <NavLink className="col-2" to="#"><i><FaPlus/></i></NavLink>
                </div>
                <div className="block-child-content">
                    <h3 className="footer-title mb-20">Categories</h3>
                    <ul className="footer-list">
                        <li className="footer-item"><NavLink className="hover-blue" to="#">Celebrations</NavLink></li>
                        <li className="footer-item"><NavLink className="hover-blue" to="#">Events</NavLink></li>
                        <li className="footer-item"><NavLink className="hover-blue" to="#">Home Decore</NavLink></li>
                        <li className="footer-item"><NavLink className="hover-blue" to="#">Seasonal Bouquet</NavLink></li>
                        <li className="footer-item"><NavLink className="hover-blue" to="#">Wending decor</NavLink></li>
                    </ul>
                </div>
            </li>
    )
}
