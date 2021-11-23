import React from 'react'
import { FaArrowRight } from "react-icons/fa"

export default function HeaderBanner() {
    return (
        <div className="header-banner">
            <a href="#" className="header-banner-content p-15 flex-center-X">
                <div href="#" className="header-banner-content-middle">
                    <span>Today deal sale off </span>
                    <b>70%</b>.End in
                    <b>126 days 13:18:00</b>
                    <span>.Hurry up</span>
                    <i className="ml-10"><FaArrowRight /></i>
                </div>
                <button>close</button>
            </a>
        </div>
    )
}
