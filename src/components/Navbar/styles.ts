import styled from "styled-components"

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
`

export const NavLeftSide = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 10px 0 15px;
`
export const NavRightSide = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 13px;
    margin: 0 15px 0 10px;
`
export const WelcomeMessage = styled.span`
    font-size: 12px;
    font-style: italic;
    margin-right: 10px;
`

export const ProfilePicture = styled.img`
    width: 35px;
    border-radius: 50%;
`
export const LoggedMessage = styled.p`
    margin-right: 10px;
`
export const HighlightedText = styled.span`
    font-weight: bold;
`
