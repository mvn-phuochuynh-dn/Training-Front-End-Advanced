import React, { Component } from 'react'

class Carousel extends Component {
    render() {
        return (
            <>
                <li className="carousel-item flex-center-Y flex-start-X">
                    <div className="carousel-img">
                        <img src="./template/asset/img/carousel-1.jpg" alt="carousel-1" />
                    </div>
                    <div className="adv-banner-content color-white">
                        <h4 className="section-sub-title">PUSH HADER/RUN FASTER &amp; GO FURTHER</h4>
                        <h2 className="section-title mt-20 mb-20">TRAINING'S CLOTHING</h2>
                        <h2 className="section-title mt-20 mb-20">LOOKBOOK</h2>
                        <a href="#" className="btn-primary btn-yellow btn-left">SHOP NOW</a>
                        <a href="#" className="btn-primary btn-none-color btn-right">VIEW THE LOOK</a>
                    </div>
                    <ul className="carousel-pagination">
                        <li className="mt-0 mb-0 ml-10 mr-10" />
                        <li className="mt-0 mb-0 ml-10 mr-10" />
                        <li className="mt-0 mb-0 ml-10 mr-10" />
                    </ul>
                </li>
            </>
        )
    }
}
export default Carousel;