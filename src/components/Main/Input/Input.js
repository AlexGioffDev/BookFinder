import styled from "styled-components";

const Input = styled.input`
    border: 1px solid #1D3557;
    flex-basis: 65%;
    background: #F1FAEE;
    color: #1D3557;
    padding:  .75rem 1rem;
    border-radius: 1.4rem;
    &:placeholder {
        color: #1D3557;
    }

    &:focus {
        outline: none;
    }
`;

export default Input;