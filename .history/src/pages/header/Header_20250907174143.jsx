import { Link } from "react-router";
import { useState } from "react";
import "./Header.css";
import "./navigation";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = (event) => {
    event.preventDefault();
    setMenuOpen((prev) => !prev);
  };
  return (
    <>
      <header aria-label="homepage-header">
        <nav aria-label="navigation">
          <ul>
            <li>
              <img
                src="/images/choose-therapy-logo-transparent.png"
                className="nav-logo-img"
                alt="choose therapy logo"
              />
            </li>
          </ul>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/expertise">OT Services</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link
                to="https://clientportal.zandahealth.com/clientportal/choosetherapy"
                target="_blank"
              >
                Appointment
              </Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="https://choosetherapy.com.au/blog" target="_blank">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <section id="nav-cont" className="nav-icon-container">
          <Link to="/">
            <img
              src="/images/choose-therapy-logo-transparent.png"
              className="nav-logo-img"
              alt="choose therapy logo"
            />
          </Link>
          <section id="hamburger-menu">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/expertise">OT Services</Link>
                </li>
                <li>
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link
                    to="https://clientportal.zandahealth.com/clientportal/choosetherapy"
                    target="_blank"
                  >
                    Appointment
                  </Link>
                </li>
                <li>
                  <Link to="contact">Contact</Link>
                </li>
                <li>
                  <Link to="https://choosetherapy.com.au/blog" target="_blank">
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </section>
          <Link to="/" aria-label="Open navigation menu">
            <img
              id="hamburger-icon"
              className="nav-icon"
              src="/images/navigation-icon.svg"
              alt="button to open navigation"
              width="40"
              height="40"
              aria-label="Open navigation menu"
            />
          </Link>
        </section>
        <section id="logo" className="logo">
          <Link to="/">
            <img
              src="/images/choose-therapy-logos-black.png"
              className="logo-img"
              alt="choose therapy logo"
            />
          </Link>
          <p>Your life, your choice.</p>
        </section>
      </header>
    </>
  );
}
