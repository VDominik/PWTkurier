import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        PWTKURIER
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0"></ul>
                        <div className="mx-lg-3">
                            <a
                                className="btn btn-outline-danger"
                                data-toggle="collapse"
                                href="/Admin/admin"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample">
                                ADMIN
                            </a>
                        </div>
                        <div className="mx-lg-1">
                            <a
                                className="btn btn-outline-light"
                                data-toggle="collapse"
                                href="/Login/login"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample">
                                Prihlásiť sa
                            </a>
                        </div>


                        {/*</div>*/}
                    </div>

                </div>
            </nav>
        </>
    );
};

export default Navbar;
