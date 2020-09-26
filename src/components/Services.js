import React from "react";
import ScreenPrinting from "./ScreenPrinting";
import Embroidery from "./Emboidery";
import Vinyl from "./Vinyl";

export default () => {
  return (
    <>
      <div id="servicesContent" className="container-fluid padding">
        <div id="servicesTitle" className="row justify-content-center">
          <div className="col-9 text-center">
            <h2>
              We're committed to providing the highest quality service, no
              matter what you need.
            </h2>
          </div>
        </div>
        <hr />
        <div className="row text-center justify-content-center padding">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <ScreenPrinting />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <Embroidery />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <Vinyl />
          </div>
        </div>
      </div>
    </>
  );
};
