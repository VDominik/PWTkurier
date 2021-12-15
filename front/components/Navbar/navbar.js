import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <>
            <nav className="position-relative navbar navbar-expand-md navbar-dark fixed-top bg-dark ">
                <div className="container-fluid">
                    {/*NADPIS*/}
                    <a className="navbar-brand" href="/">
                        PWTKURIER
                    </a>
                    {/*V PRIPADE ZMENŠENIA STRÁNKY*/}
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
                    {/*ADMIN A LOGIN*/}
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0"></ul>
                        <div className="mx-lg-1">
                            <a
                                className="btn btn-outline-light"
                                data-toggle="collapse"
                                href="/Login"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample">
                                Prihlásiť sa
                            </a>
                        </div>
                    </div>

                </div>
            </nav>
        </>
    );
};

export default Navbar;
