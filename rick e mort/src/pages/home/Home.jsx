import { Container, Input, Title, Button, SearchContainer } from "./style";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getCharacters() {
      let allCharacters = [];
      let nextPageUrl = 'https://rickandmortyapi.com/api/character';

      while (nextPageUrl) {
        try {
          const response = await fetch(nextPageUrl);
          const data = await response.json();

          if (data && data.results && Array.isArray(data.results)) {
            allCharacters = [...allCharacters, ...data.results];
            nextPageUrl = data.info.next;
          } else {
            console.error("Formato de dados inesperado da API:", data);
            nextPageUrl = null; 
          }
        } catch (error) {
          console.error("Erro ao buscar personagens:", error);
          nextPageUrl = null;
        }
      }

      setCharacters(allCharacters);
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
        <SearchContainer>
          <Input
            type='text'
            placeholder='digite o nome do personagem'
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
          <Button onClick={handleSearchButtonClick}>Pesquisar</Button>
        </SearchContainer>
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