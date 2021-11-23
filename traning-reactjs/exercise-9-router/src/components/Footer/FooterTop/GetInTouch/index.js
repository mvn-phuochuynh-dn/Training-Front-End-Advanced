import React from 'react'
import { FaPlus, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebook, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPinterestP } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import LogoWhite from '../../../../assets/img/logo-page-white.png'

export default function GetInTouch() {
    return (
        <li className="block-child col-3 col-small-12 col-medium-6 col-large-6 col-largest-3">
            <div className="title-medium display-none row">
                <h3 className="footer-title mb-20 col-10">Get in tounch</h3>
                <NavLink className="col-2" to="#"><i><FaPlus /></i></NavLink>
            </div>
            <div className="block-child-content">
                <div className="logo-page-white">
                    <NavLink to="#"><img src={LogoWhite} alt="logo-page" /></NavLink>
                </div>
                <ul className="get-in-touch-list">
                    <li className="get-in-touch-item">
                        <i className="m-5"><FaMapMarkerAlt /></i>
                        <span>184 Main Rd E, St Albans</span>
                        <p className="pl-30"> VIC 3021, Australia</p>
                    </li>
                    <li className="get-in-touch-item">
                        <i className="m-5"><FaEnvelope /></i>
                        <NavLink className="hover-blue" to="#">contact@company.com</NavLink>
                    </li>
                    <li className="get-in-touch-item">
                        <i className="m-5"><FaPhoneAlt /></i>
                        <span>+001 2233 456</span>
                    </li>
                    <li className="get-in-touch-item">
                        <ul className="get-in-touch-icon-list flex-between">
                            <li><NavLink className="hover-blue" to="#"><i className="m-5"><FaFacebookF /></i></NavLink></li>
                            <li><NavLink className="hover-blue" to="#"><i className="m-5"><FaTwitter /></i></NavLink></li>
                            <li><NavLink className="hover-blue" to="#"><i className="m-5"><FaInstagram /></i></NavLink></li>
                            <li><NavLink className="hover-blue" to="#"><i className="m-5"><FaLinkedin /></i></NavLink></li>
                            <li><NavLink className="hover-blue" to="#"><i className="m-5"><FaPinterestP /></i></NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </li>
    )
}
