import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: row;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
  }
`;


export const Img = styled.img`
alt="Picture of the author"
width="350px"
height="300px"
layout="fixed" 
 
`
;

