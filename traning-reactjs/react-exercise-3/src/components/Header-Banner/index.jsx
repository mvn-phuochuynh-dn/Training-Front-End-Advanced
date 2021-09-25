import React, { Component } from 'react'
import { FaArrowRight, FaHeart, FaSearch, FaUser, FaShoppingCart, FaEye, FaDumbbell, FaTrophy, FaChevronLeft, FaChevronRight, FaTruck, FaHeadset, FaDonate, FaPlus, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebook, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPinterestP, FaStoreAlt, FaChevronUp } from "react-icons/fa";


export default class Header_Banner extends Component {
    render() {
        return (
            <div className="header-banner">
                <a href="#" className="header-banner-content p-15 flex-center-X">
                    <div href="#" className="header-banner-content-middle">
                        <span>Today deal sale off </span>
                        <b>70%</b>.End in
                        <b>126 days 13:18:00</b>
                        <span>.Hurry up</span>
                        <i className="ml-10"><FaArrowRight /></i>
                    </div>
                    <button>close</button>
                </a>
            </div>
        )
    }
}
