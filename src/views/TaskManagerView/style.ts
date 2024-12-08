import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  margin: 0 auto;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 80%;
  }
`;

export const FilterAndAddTaskContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    margin-top: 20px;
    flex-direction: column;
  }
`;
