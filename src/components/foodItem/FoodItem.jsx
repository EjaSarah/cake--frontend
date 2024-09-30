/* eslint-disable react/prop-types */
import styled from "styled-components";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

// Styled component for FoodItem
const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  border-radius: 15px;
  box-shadow: 0px 0px 10px #00000015;
  transition: 0.3s;
  animation: fadeIn 1s;

  .food-img-wrapper {
    position: relative;
    width: 100%;
    height: 300px; /* Adjust height as needed */
  }

  .food-img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures the image covers the entire container */
    border-radius: 25px;
  }

  .add {
    width: 35px;
    height: 35px; /* Ensures the add icon is the same size */
    position: absolute;
    bottom: 15px;
    right: 15px;
    cursor: pointer;
    border-radius: 50%;
  }

  .food-item-counter {
    position: absolute;
    bottom: 15px;
    right: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 6px;
    border-radius: 50px;
    background-color: white;
  }

  .food-item-counter img {
    width: 30px;
    height: 30px; /* Ensures the counter icons are the same size */
  }

  .food-item-info {
    padding: 20px;

    .food-rating {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;

      p {
        font-size: 20px;
        font-weight: 500;
      }

      img {
        width: 70px;
        height: 15px; /* Adjust height as needed to keep rating stars consistent */
      }
    }
  }

  .food-item-dec {
    color: #676767;
    font-size: 12px;
  }

  .food-item-price {
    color: tomato;
    font-size: 22px;
    font-weight: 500;
    margin: 10px 0px;
  }
`;

const FoodItem = ({ id, name, price, description, image }) => {
  const {
    cartItems = {},
    addToCart,
    removeFromCart,
    url,
  } = useContext(StoreContext);

  return (
    <Wrapper>
      <div className="food-img-wrapper">
        <img className="food-img" src={url + "/images/" + image} alt={name} />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="Add to cart"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="Remove from cart"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="Add more"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>
        <p className="food-item-dec">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </Wrapper>
  );
};

export default FoodItem;
