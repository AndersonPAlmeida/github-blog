import styled from "styled-components";

export const LoadingContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.blue};

  svg {
    animation: spin 750ms linear infinite;
    font-size: 3.5rem;

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }
  }
`;