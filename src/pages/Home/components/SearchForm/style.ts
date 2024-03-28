import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;

  input {
    flex: 1;
    border-radius: 6px;
    padding: 1.2rem 1.6rem;
    background-color: ${(props) => props.theme["base-input"]};
    
    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }
  }
`