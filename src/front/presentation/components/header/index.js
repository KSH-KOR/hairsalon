import './header.css';
import logo from '../../assets/img/logo_ginger_and_maude.png';

import { List, X } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';
import { select, on, onscroll } from '../../../utility/eventListeners';

const Header = () => {

    const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);

    const handleMobileNavbarOpen = () => {
        setIsMobileNavbarOpen(!isMobileNavbarOpen);
    }

    const selectHeader = select('#header')
    /**
    * Scrolls to an element with header offset
    */
    const scrollto = (el) => {
        let offset = selectHeader.offsetHeight

        let elementPos = select(el).offsetTop
        window.scrollTo({
            top: elementPos - offset,
            behavior: 'smooth'
        })
    }
    let navbarlinks = select('#navbar .scrollto', true)

    const navbarlinksActive = () => {
        let position = window.scrollY + 200
        navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) return
            let section = select(navbarlink.hash)
            if (!section) return
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active')
            } else {
                navbarlink.classList.remove('active')
            }
        })
    }

    const headerScrolled = () => {
        if (selectHeader) {
            if (window.scrollY > 100) {
                selectHeader.classList.add('header-scrolled')
            } else {
                selectHeader.classList.remove('header-scrolled')
            }
        }
    }
    useEffect(() => {
        window.addEventListener('load', navbarlinksActive)
        window.addEventListener('load', headerScrolled)
        onscroll(document, navbarlinksActive)
        onscroll(document, headerScrolled)

        /**
         * Mobile nav dropdowns activate
         */
        on('click', '.navbar', function (e) {
            if (isMobileNavbarOpen) {
                e.preventDefault()
                this.nextElementSibling.classList.toggle('dropdown-active')
            }
        }, true)
    })
    return (
        <header id="header" className="fixed-top ">
            <div className="container d-flex align-items-center justify-content-lg-between">

                <img src={logo} className="logo me-auto me-lg-0" alt="logo" />

                <nav id="navbar" className={`navbar order-last order-lg-0 ${isMobileNavbarOpen ? 'mobile-open' : ''}`}>
                    <ul>
                        <li className="dropdown">
                            <a href="#">
                                <span>About</span>
                                <i className="bi bi-chevron-down"></i>
                            </a>
                            <ul>
                                <li><a href="/About">About out Hairsalon</a></li>
                                <li><a href="/Team">Team</a></li>
                                <li><a href="/Location">Location</a></li>
                                <li><a href="/Blog">Blog</a></li>
                                <li><a href="/Employment">Employment</a></li>
                                <li><a href="/FAQ">FAQ</a></li>
                            </ul>
                        </li>
                        <li><a className="nav-link scrollto" href="#services">Hair Services</a></li>
                        <li><a className="nav-link scrollto " href="#portfolio">Shop</a></li>
                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                    </ul>
                    {isMobileNavbarOpen
                        ? <X className="mobile-nav-toggle" onClick={handleMobileNavbarOpen}/>
                        : <List className="mobile-nav-toggle" onClick={handleMobileNavbarOpen} />
                    }
                </nav>

                <a href="#about" className="get-started-btn scrollto">BOOK NOW</a>

            </div>
        </header>
    );
}

export default Header;