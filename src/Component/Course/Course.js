import React from "react"

import Carousel from "../Carousel/Carousel"

import image1 from "../../Assest/images/bg-6.svg"




const Course = () => {
    return(
        <div className="product-container">
            <div className="row no-gutters">
                <div className="col-md-6">
                    <div className="img-width">
                        <img src={image1} alt="ace_image" height="600px" className="img-style img-fluid"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="product-content">
                        <div className="row">
                            <div className="col-md-11">
                                <div className="">
                                    <Carousel />
                                </div>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 export default Course

