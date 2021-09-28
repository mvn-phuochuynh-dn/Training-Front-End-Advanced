import React, { Component } from 'react'
import Clothe_Item from './Clothe-Type-Item'

class Clothe_Types extends Component {
    renderClothe = () => {
        const {arrClothe} = this.props;
        return arrClothe.map((clotheItem, index) => {
            return <Clothe_Item src={clotheItem.img} alt={clotheItem.alt} block={clotheItem.block} sub={clotheItem.sub}/>
        })
    }
    render() {
        return (
            <section className="section-clothe-types mt-30 mb-30">
                <div className="container">
                    <ul className="clothe-type-list flex-between row">
                        {this.renderClothe()}
                    </ul>
                </div>
            </section>
        )
    }
}
export default Clothe_Types;