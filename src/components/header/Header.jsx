import styled from "styled-components";
import Button from "../button/Button";

const HeaderWrapper = styled.div`
  height: 34vw;
  margin: 30px auto;
  background: url("/header-img.jpg") no-repeat center center;
  background-size: cover;
  overflow: hidden;
  position: relative;
  border-radius: 25px;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .header-contents {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1.5vw;
    max-width: 50%;
    bottom: 10%;
    right: 6vw;
    animation: fadeIn 3s;

    h2 {
      font-weight: 500;
      color: red;
      font-size: max(4.5vw, 22px);
    }

    p {
      font-size: 1.5vw;
      color: white;
    }
  }

  /* Responsive Media Queries */
  @media (max-width: 1050px) {
    height: 20vw;
    .header-contents {
      max-width: 45%;
      h2 {
        font-size: max(4vw, 20px);
      }
      p {
        font-size: 1.3vw;
      }
    }
  }

  @media (max-width: 768px) {
    height: 40vw;
    .header-contents {
      max-width: 55%;
      h2 {
        font-size: max(5vw, 18px);
      }
      p {
        font-size: 1.8vw;
      }
    }
  }

  @media (max-width: 600px) {
    height: 50vw;
    .header-contents {
      max-width: 70%;
      h2 {
        font-size: max(6vw, 16px);
      }
      p {
        display: none;
      }
    }

    Button {
      padding: 2vw 4vw;
    }
  }

  @media (max-width: 480px) {
    height: 60vw;
    .header-contents {
      max-width: 80%;
      h2 {
        font-size: max(7vw, 14px);
      }
    }

    Button {
      padding: 3vw 5vw;
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="overlay"></div>
      <div className="header-contents">
        <h2>What are you craving today?...</h2>
        <p>We have a wide variety of menu to satisfy your taste bud.</p>
        <Button>View Menu</Button>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
