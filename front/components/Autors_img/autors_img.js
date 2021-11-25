import React from 'react';

const Navbar = () => {
    return (
        <>
            <div className="container marketing">
                <div className="row">

                    {/*DOMINIK*/}
                    <div className="col">

                        <img className="bd-placeholder-img rounded-circle" width="200" height="200" src="/img/autors_imgs/dv.jpg"/>

                        <h2>Dominik Václav</h2>
                        <p>Vedúci projektu</p>
                    </div>
                    {/*DÁVID*/}
                    <div className="col">
                        <img className="bd-placeholder-img rounded-circle" width="200" height="200" src="/img/autors_imgs/dg.jpg"/>

                        <h2>Dávid Galaba</h2>
                        <p>Back-end</p>

                    </div>
                    {/*BRANIS*/}
                    <div className="col">
                        <img className="bd-placeholder-img rounded-circle" width="200" height="200" src="/img/autors_imgs/bb.jpg"/>

                        <h2>Branislav Bohunický</h2>

                        <p>Dizajnér</p>
                    </div>
                    {/*LUBOMÍR*/}
                    <div className="col">
                        <img className="bd-placeholder-img rounded-circle" width="200" height="200" src="/img/autors_imgs/lc.jpg"/>

                        <h2>Ĺubomír Cverčko</h2>

                        <p>Safalátka front-endová</p>
                    </div>
                    {/*MATÚŚ*/}
                    <div className="col">
                        <img className="bd-placeholder-img rounded-circle" width="200" height="200" src="/img/autors_imgs/ms.jpg"/>

                        <h2>Matúš Šášik</h2>

                        <p>NextJS</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
