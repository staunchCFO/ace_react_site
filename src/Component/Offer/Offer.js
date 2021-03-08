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
            title : "Talent Network"
        },
        {
            image : image2,
            title : "Software Development"
        },
        {
            image : image3,
            title : "Outsourcing"
        },
        {
            image : image4,
            title : "Featured Products"
        }
    ]

    return (
        <section id="offers" className="mt-4">
        <div className="container">
            <div className="text-center">
                <div className="col-md-12">
                    <div className="title">
                        <h3>What we Offer</h3>
                    </div>
                </div>
            </div>
            <div className="offers-box mt-4">
                {offers.map((j, k) => (
                    <div className="col-md-3 col-sm-4 col-12" key={k}>
                        <img src={j.image} alt="box" />
                        <button className="button-btn">{j.title}</button>
                    </div>
                ))}
            </div>
        </div>
    </section>
    )
}

export default Offer
