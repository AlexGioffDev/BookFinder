import styled, { keyframes } from "styled-components";

const rotate = keyframes` 
0% { transform: rotate(0) scale(1);}
30% { transform: rotate(90deg) scale(1.4); }
40% { transform: rotate(180deg) scale(0.8);  }
100% { transform: rotate(360deg) scale(1); }`;

const LoadingComponent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .circle {
        width: 10rem;
        height: 10rem;
        border: 10px solid;
        border-radius:  50%;
        border-top-color: red;
        border-bottom-color: blue;
        border-left-color: transparent;
        border-right-color: transparent;
        animation-name: ${rotate};
        animation-duration: 2s;
        animation-iteration-count: infinite;

    }
`;

export default LoadingComponent;