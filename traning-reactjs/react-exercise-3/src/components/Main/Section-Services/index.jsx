import React, { Component } from 'react'
import Service from './Service-Item';


class Services extends Component {
    render() {
        return (
            <section className="section-services mt-30 mb-30">
                <div className="container">
                    <ul className="service-list flex-around row">
                        <Service/>
                        <Service/>
                        <Service/>
                    </ul>
                </div>
            </section>
        )
    }
}
export default Services;