import styled from "styled-components";
import { assets } from "../../assets/assets";

const Wrapper = styled.div`
  margin: auto auto;
  margin-top: 100px;
  font-size: max(3vw, 20px);
  text-align: center;
  font-weight: 500;

  .app-download-platforms {
    display: flex;
    justify-content: center;
    gap: max(2vw, 10px);
    margin-top: 40px;
  }

  img {
    width: max(30vw, 120px);
    max-width: 180px;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const AppDownload = () => {
  return (
    <Wrapper id="app-download">
      <p>
        Download the 3Bcakes
        <br />
        App for a better experience
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="app download" />
        <img src={assets.app_store} alt="app download" />
      </div>
    </Wrapper>
  );
};

export default AppDownload;
