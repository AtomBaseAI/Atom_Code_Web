import Link from 'next/link'
import { Facebook, Gitlab, Instagram, Mail } from 'react-feather'
import ScrollToTop from "react-scroll-to-top";

export default function Footer() {
    return (
        <>
            <div>

                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                                <Link href="#" className="logo-footer">
                                    <img src="https://ik.imagekit.io/atominc/ATOMCODE_Web/ATOM%20CODE%20LOGO%20RECTANGLE%20LIGHT.png?updatedAt=1739081124015" height={24} alt="logo-dark" />
                                </Link>
                                <p className="mt-4">
                                    Join the next generation of AI-powered engineers.
                                    Grow your skills and connect with a thriving community.
                                    Reimagine engineering with AI-powered tools.
                                    Fueled by AI, powered by Atom Code Dev.
                                </p>
                            </div>
                            <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <h4 className="text-light footer-head">Company</h4>
                                <ul className="list-unstyled footer-list mt-4">
                                    <li><Link href="/" className="text-foot"><i className="mdi mdi-chevron-right mr-1" />Home</Link></li>
                                    <li><Link href="/about" className="text-foot"><i className="mdi mdi-chevron-right mr-1" /> About Us</Link></li>
                                    {/* <li><Link href="/career" className="text-foot"><i className="mdi mdi-chevron-right mr-1" /> Career</Link></li> */}
                                    <li><Link href="/contact" className="text-foot"><i className="mdi mdi-chevron-right mr-1" /> Contact Us</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <h4 className="text-light footer-head">Services</h4>
                                <ul className="list-unstyled footer-list mt-4">
                                    <li><Link href="/services/web" className="text-foot"><i className="mdi mdi-chevron-right mr-1" /> Web Services</Link></li>
                                    {/* <li><Link href="/services/mobile" className="text-foot"><i className="mdi mdi-chevron-right mr-1" /> Mobile App Development</Link></li> */}
                                    {/* <li><Link href="/services/seo" className="text-foot"><i className="mdi mdi-chevron-right mr-1" /> Digital Marketing</Link></li> */}
                                    <li><Link href="/services/trainings" className="text-foot"><i className="mdi mdi-chevron-right mr-1" /> Trainings Programs</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <h4 className="text-light footer-head">Newsletter</h4>
                                <form name="subscribe" method="POST" data-netlify="true">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="mt-2 foot-subscribe form-group position-relative">
                                                <label>Subscribe Us to get Updates</label>
                                                <Mail className="fea icon-sm icons" />
                                                <input type="email" name="email" className="form-control pl-5 rounded" placeholder="Your email : " required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <button type="submit" className="btn btn-soft-primary btn-block"> Submit </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </footer>
                <footer className="footer footer-bar">
                    <div className="container text-center">
                        <div className="row align-items-center">
                            <div className="col-sm-6">
                                <div className="text-sm-left">
                                    <p className="mb-0">© 2023-2025 <span className="text-indigo">Atom Code</span> Dev</p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="text-sm-right">
                                    <p className="mb-0">Powered by <span className="activex font-weight-bold">Atom Labs</span></p>
                                </div>
                            </div>
                            {/* <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <ul className="list-unstyled text-sm-right mb-0"> */}
                            {/* <li className="list-inline-item mx-2"><Link href="https://www.facebook.com/nodehivecorp" className="btn btn-icon btn-pills btn-lg btn-blue" data-toggle="tooltip" data-placement="top" title="Facebook"><Facebook className="icons" /></Link></li>
                                    <li className="list-inline-item mx-2"><Link href="https://www.instagram.com/nodehive/" className="btn btn-icon btn-pills btn-lg btn-secondary" data-toggle="tooltip" data-placement="top" title="Instagram"><Instagram className="icons" /></Link></li> */}
                            {/* <li className="list-inline-item mx-2"><Link href="https://github.com/nodehive" className="btn btn-icon btn-pills btn-lg btn-warning" data-toggle="tooltip" data-placement="top" title="Gitlab"><Gitlab className="icons" /></Link></li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </footer>
            </div>
            <ScrollToTop smooth color="#5caafd" width='20' height='20' className="btn btn-icon btn-soft-primary b-t-t" />

        </>
    )
}
