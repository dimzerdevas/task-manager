import styled from 'styled-components';

export const UserDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 10px 0 15px;
`;
export const RightSide = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 13px;
  margin: 0 15px 0 10px;
`;
export const WelcomeMessage = styled.span`
  font-size: 12px;
  font-style: italic;
  margin-right: 10px;
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
