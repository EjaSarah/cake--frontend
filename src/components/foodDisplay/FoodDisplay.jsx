/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import styled from "styled-components";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../foodItem/FoodItem";

//here we map through the food list coming from our assets folder

const Wrapper = styled.div`
  margin-top: 30px;

  h2 {
    font-size: max(2vw, 24px);
    font-weight: 600;
  }

  .food-display-list {
    display: grid;
    /* grid-template-columns: repeat(3, 1fr); */
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    margin-top: 30px;
    gap: 30px;
    row-gap: 50px;
  }
`;

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <Wrapper id="food-display">
      <h2>Hot dishes for you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          // destructuring props from food item
        })}
      </div>
    </Wrapper>
  );
};

export default FoodDisplay;
