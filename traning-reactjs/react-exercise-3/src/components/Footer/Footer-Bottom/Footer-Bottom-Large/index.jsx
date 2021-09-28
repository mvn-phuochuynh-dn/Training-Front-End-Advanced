import React, { Component } from 'react'
import { FaStoreAlt } from 'react-icons/fa'

export default class Botom_Large extends Component {
    render() {
        return (
            <div>
                <li className="bottom-social-item">
                    <a href>
                        <div className="bottom-social-content">
                            <i><FaStoreAlt /></i>
                            <p>Shop</p>
                        </div>
                    </a>
                </li>
            </div>
        )
    }
}
