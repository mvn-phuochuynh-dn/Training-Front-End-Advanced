import React from 'react'
import LogoBlack from '../../assets/img/logo-page-black.svg'
import MenuIcon from '../../assets/img/menu-icon.jpg'
import { FaHeart, FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <section className="page-header ml-30 mr-30 flex-center-X row">
                <NavLink to="/home" className="logo-page-black col-2">
                    <img src={LogoBlack} alt="logo Kalle's black" />
                </NavLink>
                <nav className="header-nav col-8">
                    <ul className="header-menu flex-center-X">
                        <li className="header-item pl-10 pr-10"><NavLink to="/home">DEMO</NavLink></li>
                        <li className="header-item pl-10 pr-10"><NavLink to="#">SHOP</NavLink></li>
                        <li className="header-item pl-10 pr-10"><NavLink to="/products">PRODUCT</NavLink></li>
                        <li className="header-item pl-10 pr-10"><NavLink to="#">SALE</NavLink></li>
                        <li className="header-item pl-10 pr-10"><NavLink to="#">PORTFOLIO</NavLink></li>
                        <li className="header-item pl-10 pr-10"><NavLink to="#">LOOKBOOK</NavLink></li>
                        <li className="header-item pl-10 pr-10"><NavLink to="/blog">BLOG</NavLink></li>
                        <li className="header-item pl-10 pr-10"><NavLink to="/profile">ACCOUNT</NavLink></li>
                    </ul>
                </nav>
                <div className="header-socials col-2">
                    <ul className="header-social-list mr-0 flex-end-X">
                        <li className="header-social-item pt-0 pb-0 pl-10 pr-10"><NavLink to="#"><i><FaSearch /></i></NavLink></li>
                        <li className="header-social-item pt-0 pb-0 pl-10 pr-10"><NavLink to="/login"><i><FaUser></FaUser></i></NavLink></li>
                        <li className="header-social-item pt-0 pb-0 pl-10 pr-10"><NavLink to="#"><i><FaHeart></FaHeart></i></NavLink></li>
                        <li className="header-social-item pt-0 pb-0 pl-10 pr-10"><NavLink to="#"><i><FaShoppingCart></FaShoppingCart></i></NavLink></li>
                    </ul>
                </div>
            </section>
            <section className="page-header-large ml-30 mr-30">
                <div className="page-header-list row">
                    <div className="header-list-img col-2">
                        <NavLink to="/home">
                            <img src={MenuIcon}  alt="menu-list" />
                        </NavLink>
                    </div>
                    <div className="logo-large col-8">
                        <NavLink to="/home" className="logo-page-black col-8">
                            <img src={LogoBlack}  alt="logo Kalle's black" />
                        </NavLink>
                    </div>
                    <div className="header-socials col-2">
                        <ul className="header-social-list mr-0 flex-end-X">
                            <li className="header-social-item pt-0 pb-0 pl-10 pr-10"><NavLink to="#"><i><FaSearch /></i></NavLink></li>
                            <li className="header-social-item pt-0 pb-0 pl-10 pr-10"><NavLink to="/login"><i><FaUser></FaUser></i></NavLink></li>
                            <li className="header-social-item pt-0 pb-0 pl-10 pr-10"><NavLink to="#"><i><FaHeart></FaHeart></i></NavLink></li>
                            <li className="header-social-item pt-0 pb-0 pl-10 pr-10"><NavLink to="#"><i><FaShoppingCart></FaShoppingCart></i></NavLink></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="page-header-medium ml-30 mr-30">
                <div className="page-header-list row">
                    <div className="header-list-img col-2">
                        <NavLink to="/home">
                            <img src={MenuIcon} alt="menu-list" />
                        </NavLink>
                    </div>
                    <div className="logo-large col-8">
                        <NavLink to="/home"className="logo-page-black col-8">
                            <img src={LogoBlack}  alt="logo Kalle's black" />
                        </NavLink>
                    </div>
                    <div className="header-socials col-2">
                        <ul className="header-social-list mr-0 flex-end-X">
                            <li className="header-social-item pt-0 pb-0 pl-10 pr-10"><NavLink to="#"><i><FaSearch /></i></NavLink></li>
                            <li className="header-social-item pt-0 pb-0 pl-10 pr-10"><NavLink to="/login"><i><FaUser></FaUser></i></NavLink></li>
                        </ul>
                    </div>
                </div>
            </section>
        </header>
    )
}
