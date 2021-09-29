import React, { Component } from 'react';
import Circle_Item from './Circle-Item';

export default class Circle extends Component {

    render() {
        let style = {
            width: "100px",
            height: "100px"
        };
        let {value} = this.props;
        return (
            < Circle_Item style={style} value={value} />
        );
    }
}
