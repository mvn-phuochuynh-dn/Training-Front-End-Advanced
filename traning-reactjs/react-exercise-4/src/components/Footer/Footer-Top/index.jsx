import React, { Component } from 'react';
import Get_In_Touch from './Get-In-Touch';
import Categories_UserFull from './Categories_And_Userfull';
import NewLetter from './Newletter';

export default class Footer_Top extends Component {
    render() {
        return (
            <section className="footer-top p-30">
                <div className="container">
                    <ul className="footer-block-list flex-around row">
                        <Get_In_Touch/>
                        <Categories_UserFull/>
                        <Categories_UserFull/>
                        <NewLetter/>
                    </ul>
                </div>
            </section>
        )
    }
}
