import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
  background-color: #181f36;
  padding-top: 20px;
  overflow-y: auto;
`;

export const CharacterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  background-color: #28355b;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 15px;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    margin-bottom: 5px;
  }
`;

export const BackButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #f44336;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #d32f2f;
  }
`;