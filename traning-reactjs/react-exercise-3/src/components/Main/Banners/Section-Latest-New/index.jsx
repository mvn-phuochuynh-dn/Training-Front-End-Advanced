import React, { Component } from 'react'
import { FaTrophy, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Latest_News_Item from './Latest-New-Item';


class Latest_News extends Component {
    renderLatestNew = () => {
        const {arrNews} = this.props;
        return arrNews.map((news, index) => {
            return <Latest_News_Item src={news.img} subTitle={news.subTitle} timePost={news.timePost} content={news.content}/>
        })
    }
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
                        {this.renderLatestNew()}
                    </ul>
                </div>
            </section>
        )
    }
}
export default Latest_News;