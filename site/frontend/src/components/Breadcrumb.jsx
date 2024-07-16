import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Breadcrumb({props}) {
  return (
    <section className="page-head-section">
        <div className="container page-heading">
            <h2 className="h3 mb-3 text-white text-center">{props.title}</h2>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb flex-lg-nowrap justify-content-center justify-content-lg-star">
                    <li className="breadcrumb-item">
                        <NavLink to={'/'}><i className="ri-home-line"></i>Accueil</NavLink>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">{props.title}</li>
                </ol>
            </nav>
        </div>
    </section>
  )
}
