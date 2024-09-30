import { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const Wrapper = styled.div`
  min-height: 60vh;
  display: grid;

  .spinner {
    width: 100px;
    height: 100px;
    place-self: center;
    border: 5px solid #bdbdbd;
    border-top-color: tomato;
    border-radius: 50%;
    animation: rotate 1s infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Verify = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  const verifyPayment = async () => {
    const response = await axios.post(url + "/api/order/verify", {
      success,
      orderId,
    });

    if (response.data.success) {
      navigate("/myorders");
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <Wrapper>
      <div className="spinner"></div>
    </Wrapper>
  );
};

export default Verify;
