import React, { Component } from 'react';
import Circle from '../Circle';

export default class Home_Page extends Component {
    render() {
        const circleStyle = {
            width: "100px",
            height: "100px"
        }
        let { number } = this.props;
        return (
            <>
                <ul className="flex-around row mt-20 mb-20">
                    <Circle style={circleStyle} number={number} />
                    <Circle style={circleStyle} number={number} />
                    <Circle style={circleStyle} number={number} />
                </ul>
            </>

        )
        
    }
}
