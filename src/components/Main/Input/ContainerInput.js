import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
   & > *{
       height: 100%;
   }

   @media only screen and (min-width: 1020px) {
       justify-content: center;
   }
`

export default Container