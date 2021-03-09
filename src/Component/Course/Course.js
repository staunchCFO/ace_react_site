import React from "react"

import Carousel from "../Carousel/Carousel"

import image1 from "../../Assest/images/bg-6.svg"




const Course = () => {
    return(
        <div className="container-fluid course-container">
            <div className="row no-gutters">
                <div className="col-md-12 col-lg-6 p-0 m-0">
                    <img src={image1} alt="ace_image"  className="course-img"/>
                </div>
                <div className="col-md-12 col-lg-6 p-0 m-0 product-content">
                    <div className=" container-fluid">
                        <div className="row no-gutters">
                            <div className="col-lg-12">
                                <div className="">
                                    <Carousel />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 export default Course

