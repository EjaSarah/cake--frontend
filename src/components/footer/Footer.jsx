import styled from "styled-components";
import { assets } from "../../assets/assets";

const Wrapper = styled.div`
  color: #d9d9d9;
  background-color: #323232;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px 8vw;
  padding-top: 80px;
  margin-top: 100px;

  .footer-content {
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 80px;
  }
  .footer-content-left,
  .footer-content-right,
  .footer-content-center {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
  }

  .footer-content-left li,
  .footer-content-right li,
  .footer-content-center li {
    list-style: none;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .footer-content-right h2,
  .footer-content-center h2 {
    color: white;
  }

  .footer-social-icons img {
    width: 40px;
    margin-right: 15px;
  }

  hr {
    width: 100%;
    height: 2px;
    margin: 20px 0;
    /* background-color: gray;
    border: none; */
  }

  @media (max-width: 750px) {
    .footer-content {
      display: flex;
      flex-direction: column;
      gap: 35px;
    }

    .logo {
      width: 180px;
    }

    .footer-copy-right {
      text-align: center;
    }
  }
`;

const Footer = () => {
  return (
    <Wrapper id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="logo" src={assets.logo} alt="" />
          <p>Satisfy your cravings...</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-right">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-center">
          <h2>Contact Us</h2>
          <ul>
            <li>+234-70540-33025</li>
            <li>3bcakesandevents3@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy-right">
        Copyright 2024 &copy; 3Bcakessandevents.com - All Rights Reserved
      </p>
    </Wrapper>
  );
};

export default Footer;
