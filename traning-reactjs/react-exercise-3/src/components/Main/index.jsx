import React, { Component } from 'react';
import Carousels from "./Carousels";
import { Clothe_Types, Sale_Off, Latest_News } from './Banners'
import Services from './Section-Services';
import { Product_List, Top_Selling } from './Products';


export default class Main extends Component {
    render() {
        return (
            <main className="page-main">
                <Carousels />
                <Clothe_Types />
                <Product_List />
                <Sale_Off />
                <Top_Selling />
                <Latest_News />
                <Services />
            </main>
        )
    }
}
