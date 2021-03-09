import React from "react"

import image1 from "../../Assest/images/178.svg"
import image2 from "../../Assest/images/201.svg"
import image3 from "../../Assest/images/200.svg"

const Testimony = () => {
    const testimonies = [
        {
            image : image1,
            head : "Exellent Work",
            caption : `Very excellent stuff..
                Very Excellent Something, my brother. Very great stuff..
                very excellent something `,
            name : "John Doe",
            work : "Microsoft"
        },
        {
            image : image2,
            head : "Great Stuff",
            caption : `Very excellent stuff..
                Very Excellent Something, my brother. Very great stuff..
                very excellent something `,
            name : "Ikechi Onu",
            work : "Google"
        },
        {
            image : image3,
            head : "Truly Magical",
            caption : `Very excellent stuff..
                Very Excellent Something, my brother. Very great stuff..
                very excellent something `,
            name : "Doe John",
            work : "Anakle"
        }
    ]

    return(
        <section id="value" className="mt-4">
            <div className="container">
                <div className='row'>
                    <div className='col-md-12 mb-5'>
                        <div className="text-center section-header">
                            <h3>Testimonials</h3>
                        </div>
                    </div>
                </div>
                <div className="row team row-mobile team-section">
                    {testimonies.map((a,b) => (
                        <div className='col-lg-4'>
                            <div className="team_member" key={b}>
                                <div className="team_img">
                                    <img src={image1} alt="first-image" className="testimony-image"/>
                                </div>
                                <div className="text-center testimony-content">
                                    <h3>{a.head}</h3>
                                    <p>{a.caption}</p>
                                    <h4>{a.name}</h4>
                                    <h5>{a.work}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimony