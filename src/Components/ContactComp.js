import React, { Component } from "react";

class ContactComp extends Component {
    render() {
        return (
            <>
                <div id="contactForm" className="container">
                    <h1>Contact Us</h1>
                    <hr />
                    <div className="row">
                        <div class="col-md-6">
                            <a
                                roll="button"
                                class="btn btn-link"
                                href="https://www.google.com/maps/place/N+Liberty+St,+Harrisonburg,+VA+22802/@38.4560216,-78.8720139,14z/data=!4m5!3m4!1s0x89b4ed368db57041:0xb5fc2d2d273b0358!8m2!3d38.4627846!4d-78.8653191"
                                target="_blank"
                            >
                                <i class="fa fa-map-marker fa-sm text-secondary"></i>
                                900 N. Liberty Street Harrisonburg, VA
                            </a>
                            <br />
                            <a
                                roll="button"
                                class="btn btn-link"
                                href="tel:+15403256360"
                            >
                                <i class="fa fa-phone fa-sm text-secondary"></i>{" "}
                                1-540-325-6360
                            </a>
                            <br />
                            <a
                                roll="button"
                                class="btn btn-link"
                                href="mailto:campsites@nucamp.co"
                            >
                                <i class="fa fa-envelope-o fa-sm text-secondary"></i>{" "}
                                truthreadsllc@gmail.com
                            </a>
                        </div>
                        <div class="col-md-6">
                            <div class="form group">
                                <label for="name">Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="name"
                                ></input>
                                <div class="form group">
                                    <label for="email">Email</label>
                                    <input
                                        type="email"
                                        class="form-control"
                                        id="email"
                                    ></input>
                                    <div class="form group">
                                        <label for="message">Message</label>
                                        <textarea
                                            id="message"
                                            class="form-control"
                                            rows="10"
                                        ></textarea>
                                    </div>
                                    <div class="form group">
                                        <button
                                            class="btn btn-primary btn-block"
                                            type=""
                                        >
                                            send
                                        </button>
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

export default ContactComp;
