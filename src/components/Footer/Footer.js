import styled from "styled-components";


const FooterContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3rem;
    background: #1D3557;
    color: #F1FAEE;
    border-top: 1px solid #000;
    z-index:100;
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding: .75rem 2rem;
    font-weight: 400;

    p {
        text-transform: uppercase;
        letter-spacing: .8px;
    }

    a {
        text-decoration: none;
        color: #F1FAEE;
    }

    @media only screen and (min-width: 768px) {
        height: 5rem;
        
        p {
            font-size: 2.5rem;
        }

        a {
            font-size: 2rem;
        }
    }
`;


export default FooterContainer;