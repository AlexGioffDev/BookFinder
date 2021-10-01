import styled from "styled-components";

const Button = styled.button`
    border: 1px solid transparent;
    width: 30%;
    margin: 1rem;
    border-radius: 1.4rem;
    background-color: #1D3557;
    color: #F1FAEE;
    text-transform: capitalize;
    font-weight: bold;
    transition: all .5s ease-in;
    cursor: pointer;
    &:hover {
        background-color: #F1FAEE;
        border-color: #1D3557;
        color: #1D3557;
        transition: all .5s ease-in;
    }

`


export default Button;