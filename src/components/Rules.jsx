import styled from "styled-components";

const Rules = () => {
  return (
    <StyledContainer>
      <h2>How to play dice game</h2>
      <p>Select any number</p>
      <p>Click on dice image</p>
      <p>
        after click on dice if selected number is equal to dice number you will
        get same point as dice
      </p>
      <p>if you get wrong guess then 2 point will be dedcuted </p>
    </StyledContainer>
  );
};

export default Rules;

const StyledContainer = styled.div`
  h2 {
    margin-bottom: 24px;
    font-size: 24px;
    font-weight: bold;
  }
  background-color: #fbf1f1;
  padding: 20px;
  align-items: center;
  max-width: 776px;
  margin-top: 64px;
  border-radius: 10px;
`;
