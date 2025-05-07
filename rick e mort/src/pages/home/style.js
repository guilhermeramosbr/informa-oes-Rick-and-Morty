import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: #181f36;
  padding: 20px;
  overflow-y: auto;

  #containerUsers {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 40px 20px;
    width: 100%; 
    max-width: 1200px; 
  }

  #containerUsers > div {
    background-color: #283149;
    border-radius: 8px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  }

  img {
    width: 100%;
    max-width: 150px; 
    height: auto;
    cursor: pointer;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  h2 {
    color: #fff;
    font-size: 1.2rem;
    margin-bottom: 5px;
  }

  p {
    color: #eee; 
    font-size: 0.9rem;
  }


  @media (max-width: 768px) {
    #containerUsers {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); 
    }

    h2 {
      font-size: 1rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 2rem;
  margin-bottom: 30px;
  text-align: center;
`;

export const Input = styled.input`
  width: 300px; 
  max-width: 400px;
  padding: 12px; 
  border-radius: 8px;
  border: none;
  margin-right: 10px;
  font-size: 1rem;
`;

export const Button = styled.button`
  padding: 12px 24px; 
  border-radius: 8px;
  border: none;
  background-color: #4caf50;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px; 
  width: 80%; 
  max-width: 450px; 
`;