import React, { Component } from 'react';
import Botom_Large from './Footer-Bottom-Large';

class Footer_Bottom extends Component {
    render() {
        return (
            <>
                <section className="footer-bottom p-30">
                    <div className="container">
                        <ul className="footer-bottom-list flex-between flex-center-Y row">
                            <li className="footer-bottom-left col-small-12 col-medium-12 col-large-8">
                                <p>Copyright © 2021 <span className="logo-color">Kalles</span> all rights reserved.
                                    Powered by
                                    <a className="hover-blue" href="#">The4</a>
                                </p>
                            </li>
                            <li className="footer-bottom-right col-small-12 col-medium-12 col-large-4">
                                <ul className="footer-bottom-list flex-around">
                                    <li className="p-10"><a className="hover-blue" href="#">Shop</a></li>
                                    <li className="p-10"><a className="hover-blue" href="#">About Us</a></li>
                                    <li className="p-10"><a className="hover-blue" href="#">Contact Us</a></li>
                                    <li className="p-10"><a className="hover-blue" href="#">Blog</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="footer-bottom-list-large display-none">
                    <div className="container">
                        <ul className="bottom-social-list flex-around mt-10 mb-10">
                            <Botom_Large />
                            <Botom_Large />
                            <Botom_Large />
                            <Botom_Large />
                            <Botom_Large />
                        </ul>
                    </div>
                </section>
            </>
        )
    }
}
export default Footer_Bottom;