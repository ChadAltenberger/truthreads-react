import React, { Component } from "react";

export class IntroComp extends Component {
    render() {
        return (
            <>
                <div id="intro" className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <h1>Truthreads</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h3>Custom Apparel</h3>
                        </div>
                    </div>
                    <hr />
                    <div className="row justify-content-center">
                        <div className="col-md-2 text-center">
                            <p>Screen-Printing</p>
                        </div>
                        <div className="col-md-2 text-center">
                            <p>Embroidery</p>
                        </div>
                        <div className="col-md-2 text-center">
                            <p>CADD Cut Vinyl</p>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-2 text-center">
                            <button
                                type="button"
                                className="btn btn-dark btn-lg"
                            >
                                <a href="#contactForm">Get In Touch</a>
                            </button>
                        </div>
                        <div className="col-md-2 text-center">
                            <a
                                role="button"
                                className="btn btn-info btn-lg"
                                href="#paymentModal"
                                data-toggle="modal"
                                data-target="#paymentModal"
                            >
                                Pay Bill
                            </a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
