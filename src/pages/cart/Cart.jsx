/* eslint-disable react/prop-types */
import { useContext } from "react";
import styled from "styled-components";
import { StoreContext } from "../../context/StoreContext";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  margin-top: 100px;

  .cart-items-title {
    display: grid;
    grid-template-columns: 1fr 1.5fr 1fr 1fr 1fr 0.5fr;
    align-items: center;
    color: gray;
    font-size: max(1vw, 12px);
    padding: 10px;

    .cart-items-item {
      margin: 10px 0px;
      color: black;
    }
  }
  img {
    width: 60px;
  }

  hr {
    height: 1px;
    background-color: #e2e2e2;
    border: none;
  }

  .cross {
    cursor: pointer;
  }

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

  .cart-promocode {
    flex: 1;
    p {
      color: #555;
    }
    .cart-promocode-input {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #eaeaea;
      border-radius: 4px;

      input {
        background: transparent;
        border: none;
        outline: none;
        padding-left: 10px;
      }
      Button {
        width: max-content(10vw, 150px);
        pad: 12px 5px;
        background-color: black;
        border: none;
        color: white;
        border-radius: 4px;
      }
    }
  }
  @media (max-width: 750px) {
    .cart-bottom {
      flex-direction: column-reverse;
    }
    .cart-promocode {
      justify-content: start;
    }
  }
`;

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } =
    useContext(StoreContext);

  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img src={url + "/images/" + item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p className="cross" onClick={() => removeFromCart(item._id)}>
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
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
          <Button onClick={() => navigate("/order")}>
            Proceed To Checkout
          </Button>
        </div>
        <div className="cart-promocode">
          <p>Have a promo code? Enter it here </p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="Promo Code" />
            <Button>Submit</Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cart;
