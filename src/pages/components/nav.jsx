import { useState } from 'react';
import Link from 'next/link';

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeParent, setActiveParent] = useState(false);
    const [active, setActive] = useState('home');
    const [activeSub, setActiveSub] = useState('');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = (itemName) => {
        
        setActive(itemName);
        setActiveSub(itemName);
        setActiveParent(itemName === 'web' || itemName === 'mob' || itemName === 'seo' || itemName === 'training');
        setIsMenuOpen(false);
    };

    return (
        <>
            <header id="topnav" className="defaultscroll nav-sticky">
                <div className="container">
                    <div>
                        <Link className="logo" href="/">
                            <img
                                src="https://ik.imagekit.io/atominc/ATOMCODE_Web/ATOM%20CODE%20LOGO%20RECTANGLE%204909X512.png"
                                height={24}
                                alt="Nodehive"
                                className="text-indigo"
                            />
                        </Link>
                    </div>
                    <div className="contact-buttonmx d-none d-md-block ">
                        <Link href="/contact" className="btn btn-primary">
                            Contact Us
                        </Link>
                    </div>
                    <div className="menu-extras">
                        <div className="menu-item">
                            <a className="navbar-toggle" onClick={toggleMenu}>
                                <div className="lines">
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div id="navigation" className={`${isMenuOpen ? 'show' : ''}`}>
                        <ul className="navigation-menu">
                            <li className={active === 'home' ? 'active' : ''}>
                                <Link href="/" onClick={() =>handleLinkClick ('home')}>
                                    Home
                                </Link>
                            </li>
                            <li className={active === 'about' ? 'active' : ''}>
                                <Link href="/about" onClick={() =>handleLinkClick ('about')}>
                                    About Us
                                </Link>
                            </li>
                            <li className={`has-submenu d-none d-md-block ${activeParent ? 'active' : ''}`}>
                                <a href="#">
                                    Services
                                </a>
                                <span className="menu-arrow" />
                                <ul className="submenu megamenu">
                                    <li>
                                        <ul>
                                            <li className={activeSub === 'web' ? 'activeservices' : ''}>
                                                <Link href="/services/web" onClick={() =>handleLinkClick('web')}>
                                                    Web Portal
                                                </Link>
                                            </li>
                                            {/* <li className={activeSub === 'mob' ? 'activeservices' : ''}>
                                                <Link href="/services/mobile" onClick={() =>handleLinkClick('mob')}>
                                                    Mobile App Development
                                                </Link>
                                            </li>
                                            <li className={activeSub === 'seo' ? 'activeservices' : ''}>
                                                <Link href="/services/history" onClick={() =>handleLinkClick('seo')}>
                                                    Digital Marketing &amp; SEO
                                                </Link>
                                            </li> */}
                                            <li className={activeSub === 'training' ? 'activeservices' : ''}>
                                                <Link href="/services/trainings" onClick={() =>handleLinkClick('training')}>
                                                    Online Trainings
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            {/* Mobile menu start */}
                            <li className="d-block d-md-none ">
                                <Link href="/services/web"  className={activeSub === 'web' ? 'activex' : ''} onClick={() =>handleLinkClick('web')}>
                                    Web Portal
                                </Link>
                            </li>
                            {/* <li className="d-block d-md-none">
                                <Link href="/services/mobile" className={activeSub === 'mob' ? 'activex' : ''} onClick={() =>handleLinkClick('mob')}>
                                    Mobile App Development
                                </Link>
                            </li>
                            <li className="d-block d-md-none">
                                <Link href="/services/seo" className={activeSub === 'seo' ? 'activex' : ''} onClick={() =>handleLinkClick('seo')}>
                                    Digital Marketing &amp; SEO
                                </Link>
                            </li> */}
                            <li className="d-block d-md-none">
                                <Link href="/services/trainings" className={activeSub === 'training' ? 'activex' : ''} onClick={() =>handleLinkClick('training')}>
                                    Online Trainings
                                </Link>
                            </li>
                            {/* Mobile menu end */}

                          
                            <li className={`d-block d-md-none ${active === 'contact' ? 'active' : ''}`} >
                                <Link href="/contact" onClick={() =>handleLinkClick('contact')}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;
