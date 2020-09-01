import React, { Component } from "react";

class WelcomeComp extends Component {
    render() {
        return (
            <>
                <div id="welcome" className="container-fluid">
                    <div className="row row-welcome text-center justify-content-center">
                        <div id="accordion">
                            <div id="welcomeCol" className="col">
                                <div id="welcomeCard" className="card">
                                    <div role="tab" className="card-header">
                                        <h1 className="display-4">
                                            <a
                                                data-toggle="collapse"
                                                data-target="#welcomeText"
                                            >
                                                People. Quality. Creativity.
                                            </a>
                                        </h1>
                                        <div
                                            className="collapse show"
                                            id="welcomeText"
                                            data-parent="accordion"
                                        >
                                            <div className="card-body">
                                                <div className="row text-center">
                                                    <div className="col">
                                                        <p className="lead">
                                                            Delivering quality
                                                            and creativity since
                                                            2013. With people at
                                                            the heart of what we
                                                            do, our passion is
                                                            serving, not
                                                            selling.
                                                        </p>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row text-center">
                                                    <div className="col">
                                                        <p>
                                                            Find out more about
                                                            who we are and what
                                                            we do.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="row justify-content-center">
                                                    <div className="col text-center">
                                                        <a
                                                            role="button"
                                                            className="btn btn-outline-dark btn-lg"
                                                            href="aboutus.html"
                                                        >
                                                            Find Out More
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default WelcomeComp;
