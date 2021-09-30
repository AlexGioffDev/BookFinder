import styled  from "styled-components";

const Input = styled.input`
    border: 1px solid #1D3557;
    background-color: #F1FAEE;
    width: 100%;
    padding: .75rem 2rem;
    border-radius: 14px;
    font-size: 1.7rem;
    color: #1D3557;
    ::placeholder {
        color: #1D3557;
        font-size: 1.3rem;
    }
    &:focus {
        outline: none;
    }

`;

export default Input