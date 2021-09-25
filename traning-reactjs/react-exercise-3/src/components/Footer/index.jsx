import React, { Component } from 'react';
import Footer_Top from './Footer-Top';
import Footer_Bottom from './Footer-Bottom';

class Page_Footer extends Component {
    render() {
        return (
            <footer className="page-footer">
                <Footer_Top />
                <Footer_Bottom />
            </footer>
        )
    }
}
export default Page_Footer;