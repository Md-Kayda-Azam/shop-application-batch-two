import React, { useState } from "react";
import logo from "../../assets/images/logo/1.png";
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import "./TopNavHeader.scss";
import Modal from "../Modal/Modal";

const TopNavHeader = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="top-nav">
        <div className="topBar-nav">
          <a href="#" className="logo">
            <img src={logo} alt="" />
          </a>
          <div className="middle-box">
            <div className="location-box">
              <button
                className="btn location-button"
                onClick={() => setShow(true)}
              >
                <span className="location-arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-map-pin"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </span>
                <span className="locat-name">Your Location</span>
                <IoIosArrowDown />
              </button>
            </div>
            <div className="search-box">
              <div className="input-group">
                <input type="search" placeholder="I'm searching for..." />
                <button className="btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-search"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="rightside-box">
            <ul className="right-side-menu">
              <li className="right-side bn">
                <a href="#">
                  <div className="delivery-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-phone-call"
                    >
                      <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                </a>
              </li>
              <div className="divider"></div>
              <li className="right-side">
                <a href="#">
                  <div className="delivery-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-heart"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </div>
                </a>
              </li>
              <div className="divider"></div>
              <li className="right-side">
                <a href="#">
                  <div className="delivery-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-shopping-cart"
                    >
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                  </div>
                </a>
              </li>
              <div className="divider"></div>
              <li className="right-side">
                <a href="#">
                  <div className="delivery-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-user"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>{" "}
      {show && (
        <Modal setShow={setShow}>
          <div className="header">
            <div className="title-section">
              <h6>Choose your Delivery Location</h6>
              <p>
                Enter your address and we will specify the offer for your area.
              </p>
            </div>
            <div className="body">
              <div className="search-input">
                <FiSearch />
                <input type="text" placeholder="Search Your Area" />
              </div>
              <div className="select-area">
                <h6>Select a Location</h6>
                <ul>
                  <li>
                    <a href="#">
                      <h6>Alabama</h6>
                      <span>Min: $130</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <h6>Arizona</h6>
                      <span>Min: $130</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <h6>California</h6>
                      <span>Min: $130</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <h6>Colorado</h6>
                      <span>Min: $130</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <h6>Florida</h6>
                      <span>Min: $130</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <h6>Georgia</h6>
                      <span>Min: $130</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <h6>Kansas</h6>
                      <span>Min: $130</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <h6>Minnesota</h6>
                      <span>Min: $130</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <h6>New York</h6>
                      <span>Min: $130</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <h6>Washington</h6>
                      <span>Min: $130</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default TopNavHeader;
