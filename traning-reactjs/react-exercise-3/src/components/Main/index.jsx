import React, { Component } from 'react';
import Carousels from "./Carousels";
import { Clothe_Types, Sale_Off, Latest_News } from './Banners'
import Services from './Section-Services';
import { Product_List, Top_Selling } from './Products';
import dataProduct from '../../data/dataProducts.json';
import dataSelling from '../../data/dataProductsTopSelling.json';
import dataClothe from '../../data/dataClotheTypes.json';
import dataNews from '../../data/dataLatesNews.json';
import dataService from '../../data/dataServices.json';


export default class Main extends Component {
    render() {
        return (
            <main className="page-main">
                <Carousels />
                <Clothe_Types arrClothe = {dataClothe}/>
                <Product_List arrProducts={dataProduct} />
                <Sale_Off />
                <Top_Selling arrSelling={dataSelling}/>
                <Latest_News arrNews = {dataNews}/>
                <Services arrService={dataService}/>
            </main>
        )
    }
}
