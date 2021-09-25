import React, { Component } from 'react'

class Sale_Off extends Component {
    render() {
        return (
            <section className="section-sales-off mt-30 mb-30">
                <div className="sales-off-img">
                    <img src="./template/asset/img/img-sales-off.jpg" alt="img-sales-off" />
                    <img className="display-none" src="./template/asset/img/full-width-banner-mobile.jpg" alt="img-sales-off" />
                </div>
                <div className="sales-off-content">
                    <p className="sub-title">BLACK FRIDAY</p>
                    <h2 className="section-title mt-20 mb-20">SAVE 50% OFF</h2>
                    <h3 className="block-title mb-20">FIRST ONLINE PURCHASE</h3>
                    <a href="#" className="btn-primary btn-black">VIEW PROMOTION</a>
                </div>
            </section>
        )
    }
}
export default Sale_Off;