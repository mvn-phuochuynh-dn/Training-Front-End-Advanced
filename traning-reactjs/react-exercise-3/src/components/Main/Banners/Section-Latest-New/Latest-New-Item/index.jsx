import React, { Component } from 'react';
import { FaTrophy, FaChevronLeft, FaChevronRight } from "react-icons/fa";

class Latest_News_Item extends Component {
    render() {
        let {src, subTitle, timePost, content} = this.props;
        return (
            <li className="latest-news-item col-4 col-small-12 col-medium-4 col-largest-4">
                <div className="latest-news-img">
                    <a href>
                        <img src={src} alt="accessories-for-man" />
                    </a>
                    <div className="btn-slide center-left display-none">
                        <a><i><FaChevronLeft /></i></a>
                    </div>
                    <div className="btn-slide center-right display-none">
                        <a><i><FaChevronRight /></i></a>
                    </div>
                </div>
                <div className="latest-news-content mt-20">
                    <h3 className="section-sub-title">
                        <a href="#">{subTitle}</a>
                    </h3>
                    <p className="time-post mt-10 mb-10">on<time className="ml-5">{timePost}</time></p>
                    <p>{content}</p>
                </div>
            </li>
        )
    }
}
export default Latest_News_Item