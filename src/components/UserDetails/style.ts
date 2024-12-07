import { Button } from '@mui/material';
import styled from 'styled-components';

export const UserDetailsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 15px 0 40px;
    padding-bottom: 15px;
    box-shadow: 0px 3px 3px grey;

    @media only screen 
      and (min-device-width: 320px) 
      and (max-device-width: 480px)
      and (-webkit-min-device-pixel-ratio: 2) {
        flex-direction: column;
        padding: 0;
    }
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 10px 0 15px;

  @media only screen 
      and (min-device-width: 320px) 
      and (max-device-width: 480px)
      and (-webkit-min-device-pixel-ratio: 2) {
        align-self: flex-end;
        margin-bottom: 15px;
    }
`;

export const RightSide = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 13px;
  margin: 0 15px 0 10px;
  gap: 15px;
`;

export const WelcomeMessage = styled.span`
  font-size: 12px;
  font-style: italic;
  margin-right: 10px;

  @media only screen 
      and (min-device-width: 320px) 
      and (max-device-width: 480px)
      and (-webkit-min-device-pixel-ratio: 2) {
        margin: 5px;
        font-size: 15px;
    }
`;

export const ProfilePicture = styled.img`
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;

export const LoggedMessage = styled.p`
  margin-right: 10px;
`;

export const HighlightedText = styled.span`
  font-weight: bold;
`;

export const StyledButton = styled(Button)`
  @media only screen 
        and (min-device-width: 320px) 
        and (max-device-width: 480px)
        and (-webkit-min-device-pixel-ratio: 2) {
          width: 100px;
      }
`
