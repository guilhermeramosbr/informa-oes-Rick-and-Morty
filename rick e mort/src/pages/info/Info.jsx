import { Container, CharacterInfo, BackButton } from "./style";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Info() {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getCharacter() {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error("Erro ao buscar dados do personagem:", error);
      }
    }

    getCharacter();
  }, [id]);

  const handleGoBack = () => {
    navigate("/");
  };

  if (!character) {
    return (
      <Container>
        <p style={{ color: '#fff' }}>Carregando informações do personagem...</p>
      </Container>
    );
  }

  return (
    <Container>
      <CharacterInfo>
        <img src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
        <p>Status: {character.status}</p>
        <p>Espécie: {character.species}</p>
        <p>Gênero: {character.gender}</p>
        <p>Origem: {character.origin?.name}</p>
        <p>Localização atual: {character.location?.name}</p>
      </CharacterInfo>
      <BackButton onClick={handleGoBack}>Voltar para a Lista</BackButton>
    </Container>
  );
}

export default Info;