import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  background: ${(props) => props.bgColor || "transparent"};
  color: ${(props) => props.color || "#49557e"};
  border: ${(props) => `1px solid ${props.borderColor || "tomato"}`};
  border-radius: 50px;
  padding: 10px 30px;
  font-size: ${(props) => props.fontSize || "16px"};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${(props) => props.hoverBgColor || "#fff4f2"};
  }
`;

const Button = ({
  children,
  bgColor,
  color,
  borderColor,
  fontSize,
  hoverBgColor,
  ...rest
}) => {
  return (
    <StyledButton
      bgColor={bgColor}
      color={color}
      borderColor={borderColor}
      fontSize={fontSize}
      hoverBgColor={hoverBgColor}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  fontSize: PropTypes.string,
  hoverBgColor: PropTypes.string,
};

export default Button;
