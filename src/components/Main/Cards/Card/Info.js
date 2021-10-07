import styled from "styled-components";

const InfoContainer = styled.div`
    position: absolute;
    background: transparent;
    top: 0;
    left: 0;
    border-radius: 14px;
    width: 100%;
    height: 0%;
    padding: 2rem 2rem;
    color: #fff;
    z-index: -100;
    font-size: 2rem;
    font-weight: 400;
    transition: all .3s ease-in;
    font-weight: 300;

    
    &.active {
        width: 100%;
        height: 100%;
        z-index: 100;
        background: rgba(0, 0, 0, .8);
        transition: all .3s ease-in;
    }

    & > button {
        position: absolute;
        top: 10px;
        right: 20px;
        color: white;
        background: transparent;
        border: none;
        font-size: 2rem;
        font-weight: bold;
        cursor: pointer;
    }

    & > h1,
    & > h2,
    & > h3 {
        font-size:1.8rem;
        font-weight: 400;

        span {
            display: block;
            margin-left: 1.2rem;
        }
    }

    & > a {
        top: 90%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-decoration: none;
        text-transform: uppercase;
        cursor: pointer;
        position: absolute;
        background-color: white;
        font-size: 1.5rem;
        font-weight: 700;
        padding: .75rem;
        color: black;
        border-radius: 14px;
    }

`

export default InfoContainer;