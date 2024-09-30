import Navbar from "./components/navbar/Navbar";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import PlaceOrder from "./pages/placeOrder/PlaceOrder";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import LoginPopUp from "./components/loginPopUp/LoginPopUp";
import Verify from "./pages/verify/Verify";
import MyOrders from "./pages/myOrders/MyOrders";

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  animation: fadeIn 0.5s ease-in;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && <LoginPopUp setShowLogin={setShowLogin} />}
      <Wrapper>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
        </Routes>
      </Wrapper>
      <Footer />
    </>
  );
};

export default App;
