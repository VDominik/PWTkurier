import React from 'react';
import Link from 'next/link';

const Main_imgs = () => {
    return (
        <>
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel ">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#myCarousel"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img width="100%" height="700px" src="/img/Main_imgs_warehouse/sklad.jpg"/>
                        <div className="container">
                            <div className="carousel-caption text-start">
                                <div className="btn btn-light opacity-75" >
                                <h1>Skupina divízií</h1>
                                <p>
                                    PWT je popredný globálny líder v oblasti logistiky. Naša skupina divízií PWT ponúka
                                    bezkonkurenčné
                                    portfólio logistických služieb počnúc vnútroštátnym a medzinárodným doručovaním
                                    balíkov, cez riešenia
                                    prepravy a plnenia záväzkov pre elektronické obchody, medzinárodnú expresnú, cestnú,
                                    leteckú a námornú
                                    prepravu, až po riadenie dodávateľského reťazca. Zistite, ktoré služby najlepšie
                                    zodpovedajú vašim
                                    obchodným potrebám.
                                </p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img width="100%" height="700px" src="/img/Main_imgs_warehouse/sklad2.jpg"/>

                        <div className="container">
                            <div className="carousel-caption">
                                <div className="btn btn-light opacity-75" >
                                <h1>Nechajte PWT pracovať za Vás</h1>
                                <p>
                                    Ako skúsený a spoľahlivý líder na trhu s globálnym dosahom vám nemusíme hovoriť len
                                    o tom, ako
                                    posielať balíky, ale vieme pre vás urobiť ešte viac. Bez ohľadu na to či zakladáte
                                    menšiu firmu, alebo
                                    optimalizujete už zabehnutý podnik, spojíme vás so správnymi odborníkmi. Potom si
                                    môžeme pohovoriť o
                                    potrebách pravidelných zásielok alebo o konkrétnych požiadavkách. Ak skôr máte
                                    záujem o jednorazovú
                                    cenovú ponuku, prosím, použite náš nástroj Získajte cenovú ponuku. S ponukou DHL pre
                                    podniky zistíte,
                                    čo myslíme pod pojmom "Excelentnosť. Jednoducho doručené.
                                </p> </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img width="100%" height="700px" src="/img/Main_imgs_warehouse/sklad3.jpg"/>

                        <div className="container">
                            <div className="carousel-caption text-end">
                                <div className="btn btn-light opacity-75" >
                                <h1>Naše divízie</h1>
                                <p>
                                    DHL spája ľudí vo viac ako 220 krajinách a oblastiach po celom svete. Vďaka úsiliu
                                    viac než 400 000
                                    zamestnancov poskytujeme integrované služby a riešenia šité na mieru pre riadenie a
                                    prepravu listov,
                                    tovarov a informácií.
                                </p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            ;
        </>
    );
};

export default Main_imgs;
