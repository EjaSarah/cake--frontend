import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { StoreContext } from "../../context/StoreContext";
import Button from "../../components/button/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  .place-order {
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 50px;
    margin-top: 100px;

    .placer-order-left {
      width: 100%;
      max-width: max(30%, 500px);

      .title {
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 50px;
      }

      input {
        margin-bottom: 15px;
        width: 100%;
        padding: 10px;
        border: 1px solid #c5c5c5;
        border-radius: 4px;
        outline-color: tomato;
      }

      .multi-fields {
        display: flex;
        gap: 10px;
      }
    }

    .place-order-right {
      width: 100%;
      max-width: max(40%, 500px);

      .cart-bottom {
        margin-top: 80px;
        display: flex;
        justify-content: space-between;
        gap: max(12vw, 20px);
      }
      .cart-total {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 20px;

        hr {
          margin: 10px 0;
        }
        Button {
          border: none;
          color: white;
          background-color: tomato;
          width: max(15vw, 200px);
          padding: 12px 0;
          border-radius: 4px;
          cursor: pointer;
        }
      }
      .cart-details {
        display: flex;
        justify-content: space-between;
        color: #555;
      }
    }
  }
`;

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });

    const orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };

    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("Error");
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/cart");
    } else if (getTotalCartAmount() === 0) {
      navigate("/cart");
    }
  }, [token]);
  return (
    <Wrapper>
      <form onSubmit={placeOrder} className="place-order">
        <div className="placer-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input
              required
              name="firstName"
              onChange={onChangeHandler}
              value={data.firstName}
              type="text"
              placeholder="First Name"
            />
            <input
              required
              name="lastName"
              onChange={onChangeHandler}
              value={data.lastName}
              type="text"
              placeholder="Last Name"
            />
          </div>
          <input
            required
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Email Address"
          />
          <input
            required
            name="street"
            onChange={onChangeHandler}
            value={data.street}
            type="text"
            placeholder="Street"
          />
          <div className="multi-fields">
            <input
              required
              name="city"
              onChange={onChangeHandler}
              value={data.city}
              type="text"
              placeholder="city"
            />
            <input
              required
              name="state"
              onChange={onChangeHandler}
              value={data.state}
              type="text"
              placeholder="State"
            />
          </div>
          <div className="multi-fields">
            <input
              required
              name="zipcode"
              onChange={onChangeHandler}
              value={data.zipcode}
              type="text"
              placeholder="Zip Code"
            />
            <input
              required
              name="country"
              onChange={onChangeHandler}
              value={data.country}
              type="text"
              placeholder="Country"
            />
          </div>
          <input
            required
            name="phone"
            onChange={onChangeHandler}
            value={data.phone}
            type="text"
            placeholder="phone"
          />
        </div>
        <div className="place-order-right">
          <div className="cart-bottom">
            <div className="cart-total">
              <h2>Cart Total</h2>
              <div>
                <div className="cart-details">
                  <p>Sub Total</p>
                  <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cart-details">
                  <p>Delivery Fee</p>
                  <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
                </div>
                <hr />
                <div className="cart-details">
                  <b>Total</b>
                  <b>
                    ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
                  </b>
                </div>
              </div>
              <Button type="submit">Proceed To Payment</Button>
            </div>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default PlaceOrder;
