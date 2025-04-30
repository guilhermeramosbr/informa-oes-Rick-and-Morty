import { Container, Input, Title, Button } from "./style";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getCharacters() {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      if (data && data.results && Array.isArray(data.results)) {
        setCharacters(data.results);
      } else {
        console.error("Formato de dados inesperado da API:", data);
        setCharacters([]);
      }
    }
    getCharacters();
  }, []);

  useEffect(() => {
   
    const results = characters.filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCharacters(results);
  }, [characters, searchTerm]);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchButtonClick = () => {
   
    console.log("Pesquisando por:", searchTerm);
  };

  return (
    <Container>
      <Title>Lista de Personagens</Title>
      <div>
        <Input
          type='text'
          placeholder='digite o nome do personagem'
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
        <Button onClick={handleSearchButtonClick}>Pesquisar</Button>
      </div>
      <div id="containerUsers">
        {Array.isArray(filteredCharacters) && filteredCharacters.length > 0 ? (
          filteredCharacters.map((character) => (
            <div key={character.id} onClick={() => navigate(`/info/${character.id}`)}>
              <img src={character.image} alt={character.name} />
              <h2>{character.name}</h2>
              <p>{character.species}</p>
            </div>
          ))
        ) : (
          <p>{characters.length > 0 ? 'Nenhum personagem encontrado.' : 'Carregando personagens...'}</p>
        )}
      </div>
    </Container>
  );
}

export default Home;