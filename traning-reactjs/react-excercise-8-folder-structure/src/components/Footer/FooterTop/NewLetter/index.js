import React from 'react'
import { FaPlus } from 'react-icons/fa'
import AmaZonIcon from '../../../../assets/img/amazon.svg'
import AmericanIcon from '../../../../assets/img/american_express.svg'
import AppleIcon from '../../../../assets/img/apple_pay.svg'
import BitcoinIcon from '../../../../assets/img/bitcoin.svg'
import PaypalIcon from '../../../../assets/img/paypal.svg'
import FpayIcon from '../../../../assets/img/f_pay.svg'
import SofortIcon from '../../../../assets/img/sofort.svg'
import VisaIcon from '../../../../assets/img/visa.svg'

export default function NewLetter() {
    return (
        <li className="block-child col-5 col-small-12 col-medium-6 col-large-6 col-largest-5">
            <div className="newsletter-content">
                <div className="title-medium display-none row">
                    <h3 className="footer-title mb-20 col-10">Newsletter Signup</h3>
                    <a className="col-2" href><i><FaPlus /></i></a>
                </div>
                <div className="block-child-content">
                    <h3 className="footer-title mb-20 ">Newsletter Signup</h3>
                    <p className="pt-10">Subscribe to our newsletter and get 10% off your first purchase</p>
                    <form action className="form-signup">
                        <input type="email" name="email" id="inpEmail" placeholder="Your email address" />
                        <button>Subscribe</button>
                    </form>
                    <form action className="form-signup-medium display-none">
                        <input type="email" name="email" id="inpEmail" placeholder="Your email address" />
                        <button>Subscribe</button>
                    </form>
                    <ul className="list-pay flex-around">
                        <li><img src={AmaZonIcon} alt="logo-pay" className="img-pay-logo" /></li>
                        <li><img src={AmericanIcon} alt="logo-pay" className="img-pay-logo" /></li>
                        <li><img src={AppleIcon} alt="logo-pay" className="img-pay-logo" /></li>
                        <li><img src={BitcoinIcon} alt="logo-pay" className="img-pay-logo" /></li>
                        <li><img src={PaypalIcon} alt="logo-pay" className="img-pay-logo" /></li>
                        <li><img src={FpayIcon} alt="logo-pay" className="img-pay-logo" /></li>
                        <li><img src={SofortIcon} alt="logo-pay" className="img-pay-logo" /></li>
                        <li><img src={VisaIcon} alt="logo-pay" className="img-pay-logo" /></li>
                    </ul>
                </div>
            </div>
        </li>
    )
}
