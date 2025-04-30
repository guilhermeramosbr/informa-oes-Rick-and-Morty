import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  justify-content: space-evenly;
  min-height: 100vh;
  background-color: #181f36;
  padding-top: 20px;
  overflow-y: auto; 

  #containerUsers {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    margin: 40px 0px;
    
  }
  img{
    cursor: pointer;
    border-radius: solid 5px
  }

  h2{
    color: #fff;
  }
    p{
        color: #fff;
    }
`;



export const Title = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 300px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-right: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #4caf50;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;