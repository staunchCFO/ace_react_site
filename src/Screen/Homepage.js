import { React } from "react";
import NavHeader from "../Component/Navbar/Navbar"
import Offer from "../Component/Offer/Offer"
import Footer from "../Component/Footer/Navbar/Footer"
import Magic from "../Component/Magic/Magic"
import Course from "../Component/Course/Course"
import Value from "../Component/Value/Value"
import Testimony from "../Component/Testimony/Testimony"
import Company from "../Component/Company/Company"
import Img from "../Assest/images/undraw_Mobile_wireframe_re_jxui.svg"




const Homepage = () => {
    return(
        <>
            <NavHeader />
            <div className="home-content" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={Img} alt="ace_illustration" width="100%" />
                        </div>
                        
                        <div className="col-lg-6 jumbo-text">
                            <h1>Let's turn your idea into something magical.</h1>
                            <p>
                                Let's switch it from "just an idea" to something delightful.
                                Something mind-blowing. Something loveable 
                            </p>
                            <button className="jumbo-btn">Reach Out</button>
                        </div>
                    </div>
                    <p className='map-marker'><i className='fa fa-map-marker mt mr-2'></i>Lagos, Nigeria</p>
                </div>
            </div>
            <Offer />
            <div className='container'>
                <div className="section-header text-center">
                    <h3>Our Courses</h3>
                </div>
            </div>
            <Course />
            <Value />
            <Testimony />
            <Company />
            <Magic />
            <Footer />
        </>
    )
}

export default Homepage