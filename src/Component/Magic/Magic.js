import React from "react";
import {Link} from 'react-router-dom'


const Magic = () => {
    return (
        <div className="magic-content">
            <div className="container">
                {/* <div className="col-md-1 order-lg-first"></div> */}
                {/* <div className="col-md-10"> */}
                    <p>
                        From individuals to startups, to fortune 500 companies - and everyone else in-between - 
                        we work with our clients to create magic
                    </p>
                    <Link to="#" className="magic-btn">Let's Create Magic</Link>
                {/* </div> */}
                {/* <div className="col-md-1 order-last"></div> */}
            </div>
        </div>
    )
}

export default Magic