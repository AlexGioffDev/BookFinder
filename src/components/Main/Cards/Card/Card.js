import styled from "styled-components";

const Card = styled.div`
    margin: 30px auto;
    width: 95%;
    height: 65%;
    position: relative;
    overflow: hidden;
    & > img {
        object-fit: fill;
        width: 100%;
        height: 100%;
        border-radius: 14px;
    }
`

export default Card;