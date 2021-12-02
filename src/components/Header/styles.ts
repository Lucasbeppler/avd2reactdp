import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 5rem;

    border-bottom: 1px solid #ccc;

    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 6rem;
        }
        strong {
            font-size: 2rem;
            height: min-content;
        }
    }

`;