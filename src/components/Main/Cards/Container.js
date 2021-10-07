import styled from "styled-components";

const Container = styled.div`
    width: 85%;
    height: 95%;
    overflow-x: hidden;
    overflow-y: auto;
    margin: 12px auto;

    @media screen and (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        height: 85%;
        margin: 60px auto;
        & > * {
            flex-basis: 45%;
        }
    }

    @media screen and (min-width: 1280px) {
        & > * {
            flex-basis: 30%;
        }
    }
`

export default Container