import React from "react";

export const FooterComp = () => {
    return (
        <>
            <footer className="site-footer footer-light">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-6 col-sm-5 text-center">
                            <a
                                className="btn btn-social-icon btn-instagram"
                                href="http://instagram.com/truthreadsprinting"
                                target="_blank"
                            >
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a
                                className="btn btn-social-icon btn-facebook"
                                href="http://facebook.com/truthreadsprinting"
                                target="_blank"
                            >
                                <i className="fa fa-facebook-square"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};
