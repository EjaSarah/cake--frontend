/* eslint-disable react/prop-types */
import styled from "styled-components";
import { menu_list } from "../../assets/assets";

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 20px;

  h1 {
    color: #262626;
    font-weight: 500;
    font-size: max(2.5vw, 22px); /* Responsive font size */
  }

  .menu-p {
    max-width: 60%;
    color: #808080;
    font-size: max(1.2vw, 16px); /* Responsive font size */
  }

  .menu-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    text-align: center;
    margin: 20px 0;
    overflow-x: auto;
    padding: 10px 0;

    /* Hide the scrollbar */
    ::-webkit-scrollbar {
      display: none;
    }
  }
  .menu-list-item {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 7.5vw;
      min-width: 80px;
      cursor: pointer;
      border-radius: 50%;
      transition: transform 0.2s ease-in-out;
      &:hover {
        transform: scale(1.1); /* Slight zoom on hover */
      }
    }

    p {
      margin-top: 10px;
      color: #747474;
      font-size: max(1.4vw, 16px);
      cursor: pointer;
    }
  }

  hr {
    margin: 10px 0;
    height: 2px;
    background-color: #e2e2e2;
    border: none;
  }

  .active {
    border: 4px solid tomato;
    padding: 2px;
  }

  /* Media queries for responsiveness */
  @media (max-width: 1050px) {
    #MenuWrapper {
      max-width: 100%;
      font-size: 14px;
    }
  }
`;

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <MenuWrapper id="MenuWrapper">
      <h1>Look through our menu</h1>
      <p className="menu-p">
        Pick from a wide variety of dishes. Whatever your craving...we got you
        covered.
      </p>
      <div className="menu-list">
        {/* Mapping through the menu list images */}
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              className="menu-list-item"
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt="menu"
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </MenuWrapper>
  );
};

export default ExploreMenu;
