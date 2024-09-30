import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import styled from "styled-components";
import axios from "axios";
import { assets } from "../../assets/assets";
import Button from "../../components/button/Button";

const Wrapper = styled.div`
  margin: 50px opx;
  .container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
  }
  .my-orders-order {
    display: grid;
    grid-template-columns: 0.5fr 2fr 1fr 1fr 2fr 1fr;
    align-items: center;
    gap: 30px;
    font-size: 14px;
    padding: 10px 20px;
    color: #454545;
    border: 1px solid tomato;
  }

  .my-orders-order img {
    width: 50px;
  }
  .my-orders-order p,
  span {
    color: tomato;
  }

  .my-orders-order p,
  b {
    color: tomato;
  }
  Button {
    border: none;
    padding: 12px 0;
    border-radius: 4px;
    background-color: #ffe1e1;
    cursor: pointer;
    color: #454545;
  }

  @media (max-width: 900px) {
    .my-orders-order {
      grid-template-columns: 1fr 2fr 1fr;
      row-gap: 5px;
      font-size: 12px;
    }
    Button {
      font-size: 10px;
    }
  }
`;

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      `${url}/api/order/userorders`,
      {},
      { headers: { token } }
    );
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <Wrapper>
      <h2>My Orders</h2>
      <div className="container">
        {data.length === 0 ? (
          <p>No orders available.</p>
        ) : (
          data.map((order, index) => (
            <div key={index} className="my-orders-order">
              <img src={assets.parcel_icon} alt="parcel" />
              <p>
                {order.items.map((item, idx) => {
                  return idx === order.items.length - 1
                    ? `${item.name} X ${item.quantity}`
                    : `${item.name} X ${item.quantity}, `;
                })}
              </p>
              <p>${order.amount}.00</p>
              <p>Items: {order.items.length}</p>
              <p>
                <span>&#25cf;</span> <b>{order.status}</b>
              </p>
              <Button onClick={fetchOrders}>Track Order</Button>
            </div>
          ))
        )}
      </div>
    </Wrapper>
  );
};

export default MyOrders;
