import styled from 'styled-components';

export const Container = styled.div`
  width: 40%;
  margin: 0 auto;

   @media only screen 
      and (min-device-width: 320px) 
      and (max-device-width: 480px)
      and (-webkit-min-device-pixel-ratio: 2) {
        width: 80%;
    }
`;
