import React from "react";
import { Fragment } from "react";

const Brunch = () => {
  return (
    <Fragment>
      <div className="section-title">
        <h2>brunch</h2>
      </div>
      <div className="cards">
        <div className="card">
          <div className="product-infos">
            <h3>waffle doce</h3>
            <span>R$37.70</span>
          </div>
          <p>Lorem ipsum dolor site amet, adipsicing elit, sed diam nonummy nibh.</p>
        </div>
        <div className="card">
          <div className="product-infos">
            <h3>arroz doce</h3>
            <span>R$37.70</span>
          </div>
          <p>Lorem ipsum dolor site amet, adipsicing elit, sed diam nonummy nibh.</p>
        </div>
        <div className="card">
          <div className="product-infos">
            <h3>maça doce</h3>
            <span>R$37.70</span>
          </div>
          <p>Lorem ipsum dolor site amet, adipsicing elit, sed diam nonummy nibh.</p>
        </div>
      </div>
    </Fragment>
  )
}

export default Brunch;