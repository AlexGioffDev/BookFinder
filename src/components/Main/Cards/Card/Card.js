import styled from "styled-components";

const Card = styled.div`
    margin: 30px auto;
    width: 95%;
    height: 65%;
    position: relative;
    border-radius: 14px;
    overflow: hidden;
    & > img {
        object-fit: fill;
        width: 100%;
        height: 100%;
    }

    & > button {
        width: 50%;
        position: absolute;
        top: 90%;
        left: 50%;
        z-index: 20;
        transform: translate(-50%, -90%);
        border: none;
        background: #1D3557;
        color: #F1FAEE;
        padding: .50rem;
        border-radius: 14px;
        text-transform: uppercase;
        font-size: 2rem;
        font-weight: bold;
        cursor: pointer;
        &:focus {
            outline: none;
        }
    }

    @media only screen and (min-height: 800px) {
        height: 50%;
    }
    
`

export default Card;