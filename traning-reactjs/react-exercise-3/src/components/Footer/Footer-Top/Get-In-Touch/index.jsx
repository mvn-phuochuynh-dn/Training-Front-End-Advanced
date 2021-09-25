import React, { Component } from 'react';
import { FaPlus, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebook, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPinterestP } from "react-icons/fa";


class Get_In_Touch extends Component {
    render() {
        return (
            <li className="block-child col-3 col-small-12 col-medium-6 col-large-6 col-largest-3">
                <div className="title-medium display-none row">
                  <h3 className="footer-title mb-20 col-10">Get in tounch</h3>
                  <a className="col-2" href><i><FaPlus/></i></a>
                </div>
                <div className="block-child-content">
                  <div className="logo-page-white">
                    <a href="#"><img src="./template/asset/img/logo-page-white.png" alt="logo-page" /></a>
                  </div>
                  <ul className="get-in-touch-list">
                    <li className="get-in-touch-item">
                      <i className="m-5"><FaMapMarkerAlt/></i>
                      <span>184 Main Rd E, St Albans</span>
                      <p className="pl-30"> VIC 3021, Australia</p>
                    </li>
                    <li className="get-in-touch-item">
                      <i className="m-5"><FaEnvelope/></i>
                      <a className="hover-blue" href>contact@company.com</a>
                    </li>
                    <li className="get-in-touch-item">
                      <i className="m-5"><FaPhoneAlt/></i>
                      <span>+001 2233 456</span>
                    </li>
                    <li className="get-in-touch-item">
                      <ul className="get-in-touch-icon-list flex-between">
                        <li><a className="hover-blue" href><i className="m-5"><FaFacebookF/></i></a></li>
                        <li><a className="hover-blue" href><i className="m-5"><FaTwitter/></i></a></li>
                        <li><a className="hover-blue" href><i className="m-5"><FaInstagram/></i></a></li>
                        <li><a className="hover-blue" href><i className="m-5"><FaLinkedin/></i></a></li>
                        <li><a className="hover-blue" href><i className="m-5"><FaPinterestP/></i></a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
        )
    }
}
export default Get_In_Touch;