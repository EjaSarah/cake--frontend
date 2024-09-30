/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import { assets } from "../../assets/assets";
import Button from "../button/Button";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const NavbarContainer = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    width: 150px;
  }

  .navbar-menu {
    display: flex;
    list-style: none;
    gap: 20px;
    color: #49557e;
    font-size: 18px;

    .active {
      padding-bottom: 2px;
      border-bottom: 2px solid #49557e;
    }
    li {
      cursor: pointer;
    }
  }

  .navbar-right {
    display: flex;
    align-items: center;
    gap: 40px;

    .icon {
      width: 22px;
      height: 22px;
    }

    .navbar-search-icon {
      position: relative;

      .dot {
        margin-top: 2px;
        position: absolute;
        top: -10px;
        right: 0px;
        min-width: 10px;
        min-height: 10px;
        background-color: tomato;
        border-radius: 50%;
      }
    }
  }

  .navbar-profile {
    position: relative;
    cursor: pointer;
  }

  .nav-profile-dropdown {
    position: absolute;
    display: none;
    right: 0;
    z-index: 1;
    background-color: #fff2ef;
    padding: 12px 25px;
    border-radius: 4px;
    border: 1px solid tomato;
    outline: 2px solid white;
    list-style: none;

    img {
      width: 20px;
    }
    li:hover {
      color: tomato;
    }
  }

  .navbar-profile:hover .nav-profile-dropdown {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  /* Responsive Queries */
  @media (max-width: 1050px) {
    .logo {
      width: 140px;
    }

    .navbar-menu {
      gap: 20px;
      font-size: 17px;
    }

    .navbar-right {
      gap: 30px;
    }

    .icon {
      width: 20px;
    }

    Button {
      padding: 8px 25px;
    }
  }

  @media (max-width: 900px) {
    .logo {
      width: 120px;
    }

    .navbar-menu {
      gap: 15px;
      font-size: 16px;
    }

    .navbar-right {
      gap: 20px;
    }

    .icon {
      width: 22pxx;
    }

    Button {
      padding: 8px 25px;
      font-size: 15px;
    }
  }

  @media (max-width: 900px) {
    .logo {
      width: 120px;
    }

    .navbar-menu {
      gap: 15px;
      font-size: 16px;
    }
    .navbar-right {
      gap: 20px;
    }
    .icon {
      width: 20;
    }
    Button {
      padding: 7px 20px;
      font-size: 15px;
    }
  }

  @media (max-width: 750px) {
    .navbar-menu {
      display: none;
    }
  }
`;

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/"); // Navigate to the homepage after logging out
  };

  return (
    <NavbarContainer>
      <Link to="/">
        <img src={assets.logo} className="logo" alt="Logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          className={menu === "home" ? "active" : ""}
          onClick={() => setMenu("home")}
        >
          Home
        </Link>
        <a
          href="#MenuWrapper"
          className={menu === "menu" ? "active" : ""}
          onClick={() => setMenu("menu")}
        >
          Menu
        </a>
        <a
          href="#app-download"
          className={menu === "mobile-app" ? "active" : ""}
          onClick={() => setMenu("mobile-app")}
        >
          Mobile app
        </a>
        <a
          href="#footer"
          className={menu === "contact-us" ? "active" : ""}
          onClick={() => setMenu("contact-us")}
        >
          Contact Us
        </a>
        <a
          className={menu === "about" ? "active" : ""}
          onClick={() => setMenu("about")}
        >
          About
        </a>
      </ul>
      <div className="navbar-right">
        <BsSearch className="icon" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <SlBasket className="icon" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <Button onClick={() => setShowLogin(true)}>LogIn</Button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="profile image" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate("/myorders")}>
                <img src={assets.bag_icon} alt="Orders" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logOut}>
                <img src={assets.logout_icon} alt="Logout" />
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
