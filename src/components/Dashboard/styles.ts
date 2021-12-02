import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;

		max-width: 65%;
		margin: 0 auto;
`;

export const Form = styled.form`
	width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

		h2 {
			margin-top: 1rem;
		}

		input {
			width: 100%;

			padding: 0.5rem;
			margin-top: 0.5rem;
		}

		input[type="submit"] {
			cursor: pointer;
		}
	
`;