/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link ms-5  active"
                  aria-current="page"
                  href="/home"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ms-5" href="/about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ms-5" href="/services">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ms-5" href="/reviews">
                  Reviews
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ms-5" href="/blogs">
                  Blogs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ms-5" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
