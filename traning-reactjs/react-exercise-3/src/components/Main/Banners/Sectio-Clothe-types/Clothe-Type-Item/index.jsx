import React, { Component } from 'react'

class Clothe_Item extends Component {
    render() {
      let {src, alt, block, sub} = this.props;
        return (
            <li className="clothe-type-item col-4 col-small-12 col-medium-4 col-wide-4 col-large-4">
                <div className="clothe-type-img">
                  <a href className="img-type">
                    <img src={src} alt={alt}/>
                  </a>
                </div>
                <div className="type-content color-white">
                  <h4 className="banner-sub-title">{block}</h4>
                  <h3 className="block-title">{sub}</h3>
                </div>
              </li>
        )
    }
}
export default Clothe_Item;