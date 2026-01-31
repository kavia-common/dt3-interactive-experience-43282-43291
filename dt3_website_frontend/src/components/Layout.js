import React from "react";
import { NavLink, Outlet } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * Layout provides the shared page chrome for the DT3 site: header/nav, main content, and footer.
 * Used as the root wrapper for all routes.
 */
export default function Layout() {
  return (
    <div className="appShell">
      <a className="skipLink" href="#main">
        Skip to content
      </a>

      <header className="siteHeader" role="banner">
        <div className="container headerInner">
          <div className="brand" aria-label="DT3">
            <div className="brandMark" aria-hidden="true" />
            <div className="brandText">
              <div className="brandTitle">DT3</div>
              <div className="brandTagline">Interactive experience, elegantly delivered</div>
            </div>
          </div>

          <nav className="nav" aria-label="Primary navigation">
            <NavLink to="/" end className={({ isActive }) => `navLink ${isActive ? "active" : ""}`}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `navLink ${isActive ? "active" : ""}`}>
              About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `navLink ${isActive ? "active" : ""}`}>
              Contact
            </NavLink>
          </nav>
        </div>
      </header>

      <main id="main" className="siteMain" role="main">
        <Outlet />
      </main>

      <footer className="siteFooter" role="contentinfo">
        <div className="container footerInner">
          <div className="footerCol">
            <div className="footerTitle">DT3</div>
            <div className="footerText">
              A polished, interactive web experience built with modern React.
            </div>
          </div>

          <div className="footerCol">
            <div className="footerTitle">Quick Links</div>
            <div className="footerLinks" aria-label="Footer quick links">
              <NavLink to="/" end className="footerLink">
                Home
              </NavLink>
              <NavLink to="/about" className="footerLink">
                About
              </NavLink>
              <NavLink to="/contact" className="footerLink">
                Contact
              </NavLink>
            </div>
          </div>

          <div className="footerCol">
            <div className="footerTitle">Contact</div>
            <div className="footerText">
              Email:{" "}
              <a className="footerLink" href="mailto:hello@dt3.example">
                hello@dt3.example
              </a>
            </div>
            <div className="footerText">Hours: Mon–Fri, 9am–5pm</div>
          </div>
        </div>

        <div className="footerBottom">
          <div className="container footerBottomInner">
            <span>© {new Date().getFullYear()} DT3. All rights reserved.</span>
            <span className="footerBottomRight">Elegant theme • Soft gradients • Rounded UI</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
