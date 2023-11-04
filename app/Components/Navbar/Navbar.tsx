"use client";
import React from "react";
import "./Navbar.css";
import Link from "next/link";
// import origami from "../../../public/Assets/origami/origami.png"
import Image from "next/image";
import DeafultButton from "../DeafultButton/DeafultButton";

import origami from "../../../public/Assets/origami/origami.png";
import MyLearning from './../../Mylearning/page';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container hoby-nav">
          <Link className="navbar-brand" href="#">
            <Image src={origami} alt="hg" width={40} height={40}></Image>
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav  mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" href="#" aria-current="page">
                  {" "}
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item search">
                <input
                  type="text"
                  className="search form-control bg-transparent text-light rounded rounded-pill "
                  placeholder="search"
                />
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" href="/" aria-current="page">
                  Home <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/courses">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/prices">
                  Prices
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/Mylearning">
                MyLearning
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/Contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="nav-item">
              {" "}
              <DeafultButton
                bg="#2945FF"
                text="Sing Up"
                handleClick={() => {
                  console.log("Clicked");
                }}
                width="100px"
              />{" "}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
