import React, { Component } from 'react'
import { FaPlus } from 'react-icons/fa'

class NewLetter extends Component {
    render() {
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
                            <li><img src="./template/asset/img/amazon.svg" alt="logo-pay" className="img-pay-logo" /></li>
                            <li><img src="./template/asset/img/american_express.svg" alt="logo-pay" className="img-pay-logo" /></li>
                            <li><img src="./template/asset/img/apple_pay.svg" alt="logo-pay" className="img-pay-logo" /></li>
                            <li><img src="./template/asset/img/bitcoin.svg" alt="logo-pay" className="img-pay-logo" /></li>
                            <li><img src="./template/asset/img/paypal.svg" alt="logo-pay" className="img-pay-logo" /></li>
                            <li><img src="./template/asset/img/f_pay.svg" alt="logo-pay" className="img-pay-logo" /></li>
                            <li><img src="./template/asset/img/sofort.svg" alt="logo-pay" className="img-pay-logo" /></li>
                            <li><img src="./template/asset/img/visa.svg" alt="logo-pay" className="img-pay-logo" /></li>
                        </ul>
                    </div>
                </div>
            </li>
        )
    }
}
export default NewLetter;