import styled from 'styled-components';
import posed from 'react-pose'
export const Container = styled.div`
  padding: 2rem 4rem 0 4rem;
  max-width: 60em;
  margin-bottom: 5vh;
  text-align: center
  `;

const spinningDiv = posed.div({
  hoverable: true,
  init: {rotateY:'0deg'},
  hover: {rotateY: '180deg'},

})

export const ImageContainer = styled(spinningDiv)`
  min-width 100px;
  width: 50%;
  max-width:300px;
  height:auto;
  img {
    border-radius:50%;
    filter:grayscale(10%) contrast(100%);
  };
`
export const FlexBox = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
`