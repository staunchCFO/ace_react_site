import React from "react"

import image1 from "../../Assest/images/github_logo.svg"
import image2 from "../../Assest/images/github_logo.svg"
import image3 from "../../Assest/images/github_logo.svg"
import image4 from "../../Assest/images/github_logo.svg"

const Company = () => {
    const comps = [
        {
            image : image1
        },
        {
            image : image2
        },
        {
            image : image3
        },
        {
            image : image4
        }
    ]

    return(
        <div className="company-container">
            <div className="container">
                <div className="company-title text-center">
                    <h3>Featured Companies</h3>
                </div>
                <div className="row mt-4">
                {comps.map((j, k) => (
                    <div className="col-md-3 col-sm-4 col-6 text-center comp_img" key={k}>
                        <img src={j.image} alt="box" />
                    </div>
                ))}
            </div>
            </div>
        </div>
    )
}

export default Company