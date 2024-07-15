import React from 'react'

export default function HomeHead() {
  return (
    <section id="home" className="home-wrapper home2 section-b-space overflow-hidden">
        <div className="container text-center">
            <div className="row">
                <div className="col-lg-7 col-12">
                    <h2>Découvrez les meilleurs plans et événements près de chez vous</h2>
                    <div className="search-section">
                        <form className="auth-form search-head" target="_blank">
                            <div className="form-group">
                                <div className="form-input mb-0">
                                    <input type="search" className="form-control search" id="inputusername" placeholder="Trouver le bon plan" />
                                    <i className="ri-search-line search-icon"></i>
                                </div>
                            </div>
                        </form>
                        <a className="btn theme-btn mt-0" href="#" role="button"><i className='ri-search-line'></i> Rechercher</a>
                    </div>
                </div>
                <div className="col-lg-5 position-relative">{/* /assets/images/home-vector.png */}
                    <img src="/assets/images/svg/header/location3.svg" className="img-fluid right-vector" alt="right-vector" />
                </div>
            </div>
        </div>
    </section>
  )
}
