import Carousel from "./Carousel";

import React, { Component } from 'react'

class Carousels extends Component {
    render() {
        return (
            <section className="section-carousels">
                <ul className="carousel-list">
                    <Carousel/>
                </ul>
            </section>
        )
    }
}
export default Carousels;