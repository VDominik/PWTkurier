import React from 'react';

const Navbar = () => {
    return (
        <>
            <div className="container marketing p-2">
                {/*Nadpis*/}
                <div className="col text-center p-3">
                    <button type="button" className="btn btn-outline-dark ratio ratio-10x9 fs-2 fw-ligh">Náš tím
                    </button>
                </div>
                {/*Nastavenie Autorov*/}
                <div className="row ">
                    {/*DOMINIK*/}
                    <div className="col text-center p-3">
                        <img className="bd-placeholder-img rounded-circle m-3" width="200" height="200"
                             src="/img/autors_imgs/dv.jpg"/>
                        <h2 className="fs-3 text-center">Dominik Václav</h2>
                        <div className="mx-lg-4">
                            <button type="button" className="btn btn-outline-dark ">Back-end</button>
                        </div>
                    </div>
                    {/*DÁVID*/}
                    <div className="col text-center p-3">
                        <img className="bd-placeholder-img rounded-circle m-3" width="200" height="200"
                             src="/img/autors_imgs/dg.jpg"/>

                        <h2 className="fs-3 mx-lg-3 text-center">Dávid Galaba</h2>
                        <div className="mx-lg-5">
                            <button type="button" className="btn btn-outline-dark ">Front-end</button>
                        </div>
                    </div>
                    {/*BRANIS*/}
                    <div className="col text-center p-3">
                        <img className="bd-placeholder-img rounded-circle m-3" width="200" height="200"
                             src="/img/autors_imgs/bb.jpg"/>
                        <h2 className="fs-3 mx-lg-2 text-center">Braňo Bohunický</h2>
                        <div className="mx-lg-5">
                            <button type="button" className="btn btn-outline-dark ">Front-end</button>
                        </div>
                    </div>
                    {/*LUBOMÍR*/}
                    <div className="col text-center p-3">
                        <img className="bd-placeholder-img rounded-circle m-3" width="200" height="200"
                             src="/img/autors_imgs/lc.jpg"/>
                        <h2 className="fs-3 mx-lg-2 text-center">Ľubomír Cverčko</h2>
                        <div className="mx-lg-5">
                            <button type="button" className="btn btn-outline-dark ">Front-end</button>
                        </div>
                    </div>
                    {/*MATÚŚ*/}
                    <div className="col text-center p-3">
                        <img className="bd-placeholder-img rounded-circle m-3" width="200" height="200"
                             src="/img/autors_imgs/ms.jpg"/>
                        <h2 className="fs-3 mx-lg-2 text-center">Matúš Šášik</h2>
                        <div className="mx-lg-5">
                            <button onClick="/pes" type="button" className="btn btn-outline-dark">Back-end</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
