import React, { Component } from 'react'
import { FaHeart, FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

class Header extends Component {
    render() {
        return (
            <header>
                <section className="page-header ml-30 mr-30 flex-center-X row">
                    <a href="#" className="logo-page-black col-2">
                        <img src="./template/asset/img/logo-page-black.svg
      " alt="logo Kalle's black" />
                    </a>
                    <nav className="header-nav col-8">
                        <ul className="header-menu flex-center-X">
                            <li className="header-item pl-10 pr-10"><a href="#">DEMO</a></li>
                            <li className="header-item pl-10 pr-10"><a href="#">SHOP</a></li>
                            <li className="header-item pl-10 pr-10"><a href="#">PRODUCT</a></li>
                            <li className="header-item pl-10 pr-10"><a href="#">SALE</a></li>
                            <li className="header-item pl-10 pr-10"><a href="#">PORTFOLIO</a></li>
                            <li className="header-item pl-10 pr-10"><a href="#">LOOKBOOK</a></li>
                            <li className="header-item pl-10 pr-10"><a href="#">BLOG</a></li>
                        </ul>
                    </nav>
                    <div className="header-socials col-2">
                        <ul className="header-social-list mr-0 flex-end-X">
                            <li className="header-social-item pt-0 pb-0 pl-10 pr-10"><a href><i><FaSearch /></i></a></li>
                            <li className="header-social-item pt-0 pb-0 pl-10 pr-10"><a href><i><FaUser></FaUser></i></a></li>
                            <li className="header-social-item pt-0 pb-0 pl-10 pr-10"><a href><i><FaHeart></FaHeart></i></a></li>
                            <li className="header-social-item pt-0 pb-0 pl-10 pr-10"><a href><i><FaShoppingCart></FaShoppingCart></i></a></li>
                        </ul>
                    </div>
                </section>
                <section className="page-header-large ml-30 mr-30">
                    <div className="page-header-list row">
                        <div className="header-list-img col-2">
                            <a href="#">
                                <img src="./template/asset/img/menu-icon.jpg" alt="menu-list" />
                            </a>
                        </div>
                        <div className="logo-large col-8">
                            <a href="#" className="logo-page-black col-8">
                                <img src="./template/asset/img/logo-page-black.svg" alt="logo Kalle's black" />
                            </a>
                        </div>
                        <div className="header-socials col-2">
                            <ul className="header-social-list mr-0 flex-end-X">
                                <li className="header-social-item pt-0 pb-0 pl-10 pr-10"><a href><i><FaSearch /></i></a></li>
                                <li className="header-social-item pt-0 pb-0 pl-10 pr-10"><a href><i><FaUser></FaUser></i></a></li>
                                <li className="header-social-item pt-0 pb-0 pl-10 pr-10"><a href><i><FaHeart></FaHeart></i></a></li>
                                <li className="header-social-item pt-0 pb-0 pl-10 pr-10"><a href><i><FaShoppingCart></FaShoppingCart></i></a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="page-header-medium ml-30 mr-30">
                    <div className="page-header-list row">
                        <div className="header-list-img col-2">
                            <a href="#">
                                <img src="./template/asset/img/menu-icon.jpg" alt="menu-list" />
                            </a>
                        </div>
                        <div className="logo-large col-8">
                            <a href="#" className="logo-page-black col-8">
                                <img src="./template/asset/img/logo-page-black.svg
                  " alt="logo Kalle's black" />
                            </a>
                        </div>
                        <div className="header-socials col-2">
                            <ul className="header-social-list mr-0 flex-end-X">
                                <li className="header-social-item pt-0 pb-0 pl-10 pr-10"><a href><i><FaSearch /></i></a></li>
                                <li className="header-social-item pt-0 pb-0 pl-10 pr-10"><a href><i><FaUser></FaUser></i></a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </header>
        )
    }
}
export default Header;