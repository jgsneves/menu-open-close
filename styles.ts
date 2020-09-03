import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div<{active?: boolean}>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: #282C31;
    border-right: 1px solid #4D4D4D;
    height: 100vh;
    min-width: ${props => props.active ? "280px" : "95px"};
    max-width: 100vw;

    img {
        display: ${props => props.active ? 'inline' : 'none'};
    }


    ${media.lessThan("medium")`
        display: none;
    `}
`;

export const LinksDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-self: start;
`;

export const StrongText = styled.strong<{active: boolean; color: string}>`
    color: ${props => props.color === "active" ? "#0AB3FB" :  "#FFFFFF"};
    font-size: 1rem;
    text-decoration: none;
    display: ${props => props.active ? "inline" : "none"};
    padding-left: 10px;
`;

export const LinkElement = styled.div<{color: string}>`
    display: flex;
    align-content: center;
    align-items: center;
    padding-left: ${props => props.color === 'active' ? '37px' : '40px'};
    padding-top: 20px;
    padding-bottom: 20px;
    border-left-style: ${props => props.color === 'active' ? 'solid' : 'none'};
    border-left-color: ${props => props.color === 'active' ? '#0AB3FB' : ''};
`;

export const TopAndBottomDiv = styled.div`
    padding: 20px 0;
`;