import React from 'react'
import CategoriesAndUserFull from './CategoriesAndUserFull'
import GetInTouch from './GetInTouch'
import NewLetter from './NewLetter'

export default function FooterTop() {
    return (
        <section className="footer-top p-30">
            <div className="container">
                <ul className="footer-block-list flex-around row">
                    <GetInTouch/>
                    <CategoriesAndUserFull />
                    <CategoriesAndUserFull />
                    <NewLetter />
                </ul>
            </div>
        </section>
    )
}
