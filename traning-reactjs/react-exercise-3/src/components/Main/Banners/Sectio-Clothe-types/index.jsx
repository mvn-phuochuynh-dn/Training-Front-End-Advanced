import React, { Component } from 'react'
import Clothe_Item from './Clothe-Type-Item'

class Clothe_Types extends Component {
    render() {
        return (
            <section className="section-clothe-types mt-30 mb-30">
                <div className="container">
                    <ul className="clothe-type-list flex-between row">
                        <Clothe_Item/>
                        <Clothe_Item/>
                        <Clothe_Item/>
                    </ul>
                </div>
            </section>
        )
    }
}
export default Clothe_Types;