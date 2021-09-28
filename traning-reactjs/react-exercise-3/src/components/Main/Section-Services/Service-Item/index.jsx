import React, { Component } from 'react';

class Service extends Component {
    render() {
        let {icon, title, content} = this.props;
        return (
            <li className="service-item col-4 col-small-12 col-medium-4 col-largest-4">
                <i>{icon}</i>
                <div className="service-item-info mt-10 mb-10">
                    <h4 className="section-sub-title pt-10 pb-10">{title}</h4>
                    <p>{content}</p>
                </div>
            </li>
        )
    }
}
export default Service;