import React, { Component } from 'react'

class Clothe_Item extends Component {
    render() {
        return (
            <li className="clothe-type-item col-4 col-small-12 col-medium-4 col-wide-4 col-large-4">
                <div className="clothe-type-img">
                  <a href className="img-type">
                    <img src="./template/asset/img/accessories-for-man.jpg" alt="accessories-for-man" />
                  </a>
                </div>
                <div className="type-content color-white">
                  <h4 className="banner-sub-title">ACCESSORIES</h4>
                  <h3 className="block-title">FOR MEN</h3>
                </div>
              </li>
        )
    }
}
export default Clothe_Item;