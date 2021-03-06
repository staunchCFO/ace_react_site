import React from "react"

import image1 from "../../Assest/images/178.svg"
import image2 from "../../Assest/images/201.svg"
import image3 from "../../Assest/images/200.svg"
import image4 from "../../Assest/images/200.svg"

const Value = () => {
    const values = [
        {
            image : image1,
            title : "Web Development",
            caption : "Pawtastic is awesome! They are passionate about pets and employ trustworthy, dependable staff. We love them"
        },
        {
            image : image2,
            title : "User Experience Design",
            caption : "I'm a repeat customer, because of their amazing care for our two cats when we travel. I can relax because i know they're there! "
        },
        {
            image : image3,
            title : "Cybersecurity",
            caption : "Pawtastic is awesome! They are passionate about pets and employ trustworthy, dependable staff. We love them"
        },
        {
            image : image4,
            title : "Mobile App Development",
            caption : "Pawtastic is awesome! They are passionate about pets and employ trustworthy, dependable staff. We love them"
        }
    ]

    return (
        <section id="values" className="mt-4">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="text-center section-header">
                        <h3>Our Core Deliverables</h3>
                    </div>
                </div>
            </div>
            <div className="values-box mt-1">
                <div className="row">
                    {values.map((j, k) => (
                        <div className="col-lg-6 col-md-12" key={k}>
                            <div className="row content">
                                <div className="col-4">
                                    <img src={j.image} alt={j.title} />
                                </div>
                                {/* <div className='col-md-1'></div> */}
                                <div className="col-8">
                                    <h4 className="value-title">{j.title}</h4>
                                    <p className="value-text">{j.caption}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="del-button-div">
                <button className="del-button">View All Deliverables</button>
            </div>
        </div>
    </section>
    )
}

export default Value