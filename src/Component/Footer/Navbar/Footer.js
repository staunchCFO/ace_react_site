import {Link} from 'react-router-dom'
// import Logo from '../assets/images/logo-blue.png'


const currentDate = new Date().getFullYear()

const Footer = () => {
    return(
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-4 mb-3">
                        <h6>ACE AFRICA</h6>
                        <ul>
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/">Mission</Link></li>
                            <li><Link to="/">Vision</Link></li>
                            <li><Link to="/">Team</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-4 mb-3">
                        <h6>LEGAL</h6>
                        <ul>
                            <li><Link to="/">Refund Policy</Link></li>
                            <li><Link to="/">Privacy</Link></li>
                            <li><Link to="/">Terms of Use</Link></li>
                            <li><Link to="/">Code of Conduct</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-4 mb-3">
                        <h6>HELP</h6>
                        <ul>
                            <li><Link to="/">Complain</Link></li>
                            <li><Link to="/">Enquiry</Link></li>
                            <li><Link to="/">Suggestion</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-4 mb-3">
                        <h6>CONTACT</h6>
                        <ul>
                            <li>1, Dorban Baracks, Ikoyi</li>
                            <li>hello@aceafrica.com</li>
                            <li>07089632478, 08047856324</li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p>
                        COPYRIGHT &copy;, {currentDate} <span className="ace">ACE AFRICA</span>. ALL RIGHTS RESERVED
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer