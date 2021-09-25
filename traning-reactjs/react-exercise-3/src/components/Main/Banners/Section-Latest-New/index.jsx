import React, { Component } from 'react'
import { FaTrophy, FaChevronLeft, FaChevronRight } from "react-icons/fa";


class Latest_News extends Component {
    render() {
        return (
            <section className="section-latest-news">
                <div className="container">
                    <div className="block-title-top">
                        <h2 className="section-title mt-20 mb-20">Latest News</h2>
                        <i className="mt-20 mb-20"><FaTrophy /></i>
                        <p className="mt-10 mb-10">Increased caloric expenditure can result from resistance training both due to acute effects from
                            training sessions</p>
                        <p className="mt-10 mb-10">and long-term effects from increased muscle mass.</p>
                    </div>
                    <ul className="latest-news-list flex-around mt-30 mb-30 row">
                        <li className="latest-news-item col-4 col-small-12 col-medium-4 col-largest-4">
                            <div className="latest-news-img">
                                <a href>
                                    <img src="./template/asset/img/blog-01.jpg" alt="accessories-for-man" />
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
                                    <a href="#">Tips At-home Cadio Workout</a>
                                </h3>
                                <p className="time-post mt-10 mb-10">on<time className="ml-5">September 1, 2020</time></p>
                                <p>Time to get your sweat on with this workout for a flat stomach! These are the 10 best
                                    moves to tighten up that core..</p>
                            </div>
                        </li>
                        <li className="latest-news-item col-4 col-small-12 col-medium-4 col-largest-4">
                            <div className="latest-news-img">
                                <a href>
                                    <img src="./template/asset/img/blog-02.jpg" alt="accessories-for-man" />
                                </a>
                            </div>
                            <div className="latest-news-content mt-20">
                                <h3 className="section-sub-title">
                                    <a href="#">5 Tips To Stay Healthy At Home</a>
                                </h3>
                                <p className="time-post mt-10 mb-10">on<time className="ml-5">September 1, 2020</time></p>
                                <p>And now more than ever it’s so important to continue to take care of ourselves and make
                                    sure we’re putting extra ca...</p>
                            </div>
                        </li>
                        <li className="latest-news-item col-4 col-small-12 col-medium-4 col-largest-4">
                            <div className="latest-news-img">
                                <a href>
                                    <img src="./template/asset/img/blog-03.jpg" alt="accessories-for-man" />
                                </a>
                            </div>
                            <div className="latest-news-content mt-20">
                                <h3 className="section-sub-title">
                                    <a href="#">10 minute Fat Burning Workout For Beginners</a>
                                </h3>
                                <p className="time-post mt-10 mb-10">on<time className="ml-5">September 1, 2020</time></p>
                                <p>I know sometimes it can be difficult to keep your healthy nutrition on track, so that’s
                                    why Icreated the Hot Body ...
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}
export default Latest_News;