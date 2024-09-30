/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import styled from "styled-components";
import { assets } from "../../assets/assets";
import Button from "../button/Button";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const Wrapper = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: #00000090;
  display: grid;

  .login-container {
    place-self: center;
    width: max(23vw, 230px);
    color: #808080;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 25px 30px;
    border-radius: 8px;
    font-size: 14px;
    animation: fadeIn 0.5s;

    .login-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: black;
    }

    img {
      width: 16px;
      cursor: pointer;
    }

    .login-input {
      display: flex;
      flex-direction: column;
      gap: 20px;

      input {
        outline: none;
        border: 1px solid #c9c9c9;
        padding: 10px;
        border-radius: 4px;
      }
    }
    Button {
      border: none;
      pad: 10px;
      border-radius: 4px;
      color: white;
      background-color: tomato;
      font-size: 15px;
      cursor: pointer;
    }

    .login-condition {
      display: flex;
      align-items: start;
      gap: 8px;
      margin-top: -15px;

      input {
        margin-top: 5px;
      }
    }
    p span {
      color: tomato;
      font-weight: 500;
      cursor: pointer;
    }
  }
`;

const LoginPopUp = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "Login") {
      // Matching case
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };
  const toggleState = () => {
    setCurrState((prevState) => (prevState === "Login" ? "Sign Up" : "Login"));
  };

  return (
    <Wrapper>
      <form onSubmit={onLogin} className="login-container" action="">
        <div className="login-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="close"
          />
        </div>
        <div className="login-input">
          {currState === "Sign Up" && (
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              required
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Me@gmail.com"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <Button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </Button>
        <div className="login-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use and privacy</p>
        </div>
        <p>
          {currState === "Login"
            ? "Create Account "
            : "Already have an account? "}
          <span onClick={toggleState}>
            {currState === "Login" ? "Click here" : "Login here"}
          </span>
        </p>
      </form>
    </Wrapper>
  );
};

export default LoginPopUp;
