import React, { Component } from 'react';
import Circle from './Circle';
import { FaBackward } from "react-icons/fa";

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homePage: true,
            aboutPage: false
        };
        this.changPage = this.changPage.bind(this);
    }

    changPage() {
        this.setState((prevState) => ({
            homePage: !prevState.homePage,
            aboutPage: !prevState.aboutPage,
        }));
    }

    render() {
        return (
            <>
                <section className="section-circle mt-70 mb-70">
                    <div className="container">
                        <div className="circle-block mt-20 mb-20">
                            <h4 className="slider round" onClick={this.changPage}><FaBackward/></h4>
                            {this.state.homePage
                                ? (<div className="circle-list flex-around row">
                                    <Circle value={50} />
                                    <Circle value={25} />
                                    <Circle value={30} />
                                </div>)
                                : <h1>Wellcome to Page About</h1>
                            }
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
