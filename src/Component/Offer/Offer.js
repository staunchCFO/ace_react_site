import React from "react"
import {Link} from "react-router-dom"

import image1 from '../../Assest/images/bg.svg'
import image2 from '../../Assest/images/bg-1.svg'
import image3 from '../../Assest/images/bg-2.svg'
import image4 from '../../Assest/images/bg-3.svg'

const Offer = () => {
    const offers = [
        {
            image : image1,
            title : "Talent Network" ,
            link : '#',
            nameOfClass : 'offers-img'
        },
        {
            image : image2, 
            title : "Software Development",
            link : '#',
            nameOfClass : 'offers-img',
        },
        {
            image : image3,
            title : "Outsourcing",
            link : '#',
            nameOfClass : 'offers-img'
        },
        {
            image : image4,
            title : "Featured Products",
            link : '##' ,
            nameOfClass : 'offers-img'
        }
    ]

    return (
        <section id="offers" className="mt-3">
        <div className="container">
            <div className="row text-center">
                <div className="col-md-12">
                    <div className="section-header">
                        <h3>What we Offer</h3>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                {offers.map((j, k) => (
                    <div className="col-lg-3 col-md-6 col-6 mb-4" key={k}>
                        <img src={j.image} className={j.nameOfClass} alt="box" />
                        <Link to={j.link} className="button-btn">{j.title}</Link>
                    </div>
                ))}
            </div>
        </div>
    </section>
    )
}

export default Offer
