// NPM packages
import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";

// Modules
import { userState } from "../Redux/mapReduxStateToProps";
import { REMOVE_USER } from "../Redux/actions/userActions";
import "../styles/Navbar.css";

const Navbar = (props) => {
  const [query, setQuery] = useState("");
  const handleOnChange = ({ target: { value } }) => setQuery(value);

  const {
    userState: { user },
    REMOVE_USER,
    history: { push },
  } = props;

  const handleOnClick = (e) => {
    const hamburger = document.querySelectorAll(".hamburger");
    for (var i of hamburger) {
      i.classList.toggle("active");
    }
    document.querySelector("nav .menu").classList.toggle("active");
    document.querySelector("nav .mask").classList.toggle("active");
  };

  const handleLinkSignout = () => {
    document.querySelector("nav .link.link_signout").classList.toggle("active");
  };

  const handleButton = () => {
    return push(`/search/?q=${query}`);
  };

  return (
    <nav>
      {/* hamburger */}
      <div className="hamburger" onClick={handleOnClick}>
        <div className="hamburger_item hamburger_item_1"></div>
        <div className="hamburger_item hamburger_item_2"></div>
        <div className="hamburger_item hamburger_item_3"></div>
      </div>
      {/* logo */}
      <div className="logo">
        <svg viewBox="0 0 576 512">
          <path
            fill="currentColor"
            d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
          ></path>
        </svg>
        <span>mTube</span>
      </div>

      {/* Search */}
      <div className="search_box">
        <input
          type="text"
          name="search"
          onChange={handleOnChange}
          placeholder="Search"
        />

        <button className="search_button" onClick={handleButton}>
          <svg viewBox="0 0 512 512">
            <path
              fill="currentColor"
              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
            ></path>
          </svg>
        </button>
      </div>

      {/* signout || signin */}
      {!user ? (
        <Link
          className="link link_signin"
          to="/signin"
          style={{ textDecoration: "none", margin: "0 30px 0 0" }}
        >
          <svg viewBox="0 0 496 512">
            <path
              fill="currentColor"
              d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"
            ></path>
          </svg>
          Signin
        </Link>
      ) : (
        <div className="link link_signout" onClick={handleLinkSignout}>
          <svg viewBox="0 0 496 512">
            <path
              fill="currentColor"
              d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"
            ></path>
          </svg>
          {/* Harish */}
          {user.name}
          <svg className="down_arrow" viewBox="0 0 448 512">
            <path
              fill="currentColor"
              d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
            ></path>
          </svg>
          <div className="profile_signout">
            {/* <p>Profile</p>
            <hr /> */}
            <p
              onClick={() => {
                REMOVE_USER(null);
                push("/home");
              }}
            >
              Signout
            </p>
          </div>
        </div>
      )}
      {/* menu */}

      <div className="menu">
        <div className="menu_top">
          {/* hamburger */}
          <div className="hamburger" onClick={handleOnClick}>
            <div className="hamburger_item hamburger_item_1"></div>
            <div className="hamburger_item hamburger_item_2"></div>
            <div className="hamburger_item hamburger_item_3"></div>
          </div>
          {/* logo */}
          <div className="logo">
            <svg viewBox="0 0 576 512">
              <path
                fill="currentColor"
                d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
              ></path>
            </svg>
            <span>mTube</span>
          </div>
        </div>
        <ul>
          <li>
            <Link to="/home">
              <svg viewBox="0 0 24 24" fill="rgb(88, 87, 87)">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8"></path>
              </svg>
              <span>Home</span>
            </Link>
          </li>
          {/* <li>
            <Link to="/trending">
              <svg viewBox="0 0 24 24" fill="rgb(88, 87, 87)">
                <path d="M17.53 11.2c-.23-.3-.5-.56-.76-.82-.65-.6-1.4-1.03-2.03-1.66-1.46-1.46-1.78-3.87-.85-5.72-.9.23-1.75.75-2.45 1.32C8.9 6.4 7.9 10.07 9.1 13.22c.04.1.08.2.08.33 0 .22-.15.42-.35.5-.22.1-.46.04-.64-.12-.06-.05-.1-.1-.15-.17-1.1-1.43-1.28-3.48-.53-5.12C5.87 10 5 12.3 5.12 14.47c.04.5.1 1 .27 1.5.14.6.4 1.2.72 1.73 1.04 1.73 2.87 2.97 4.84 3.22 2.1.27 4.35-.12 5.96-1.6 1.8-1.66 2.45-4.3 1.5-6.6l-.13-.26c-.2-.45-.47-.87-.78-1.25zm-3.1 6.3c-.28.24-.73.5-1.08.6-1.1.38-2.2-.16-2.88-.82 1.2-.28 1.9-1.16 2.1-2.05.17-.8-.14-1.46-.27-2.23-.12-.74-.1-1.37.2-2.06.15.38.35.76.58 1.06.76 1 1.95 1.44 2.2 2.8.04.14.06.28.06.43.03.82-.32 1.72-.92 2.26z"></path>
              </svg>
              <span>Trending</span>
            </Link>
          </li>
          <li>
            <Link to="/playlist">
              <svg viewBox="0 0 24 24" fill="rgb(88, 87, 87)">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"></path>
              </svg>
              <span>Library</span>
            </Link>
          </li> */}
        </ul>
      </div>
      <div className="mask" onClick={handleOnClick}></div>
    </nav>
  );
};

export default connect(userState, { REMOVE_USER })(withRouter(Navbar));
