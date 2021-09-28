import React, { Component } from 'react'
import Service from './Service-Item';
import { FaTruck, FaHeadset, FaDonate } from "react-icons/fa";


class Services extends Component {
    renderService = () => {
        const { arrService } = this.props;
        const icons = [<FaTruck />, <FaHeadset />, <FaDonate />];
        return arrService.map((item, index) => {
            return (
                <Service icon={icons[index]} title={item.title} content={item.content}/>
            )
        })
    }

    render() {

        return (
            <section className="section-services mt-30 mb-30">
                <div className="container">
                    <ul className="service-list flex-around row">
                        {this.renderService()}
                    </ul>
                </div>
            </section>
        )
    }
}
export default Services;