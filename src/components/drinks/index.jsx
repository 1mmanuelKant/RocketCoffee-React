import React, {Fragment} from "react";

const Drinks = (props) => {
  return(
    <Fragment>
      <div className="section-title">
        <h2>bebidas</h2>
      </div>
      <div className="cards">
        <div className="card">
          <div className="product-infos">
            <h3>suco de alface</h3>
            <span>R$37.70</span>
          </div>
          <p>Lorem ipsum dolor site amet, adipsicing elit, sed diam nonummy nibh.</p>
        </div>
        <div className="card">
          <div className="product-infos">
            <h3>vinho fino</h3>
            <span>R$37.70</span>
          </div>
          <p>Lorem ipsum dolor site amet, adipsicing elit, sed diam nonummy nibh.</p>
        </div>
      </div>
    </Fragment>
  )
}

export default Drinks; 