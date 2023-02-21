import styled from "styled-components";

export const Container = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(272px, 1fr)); /* no máximo 3 colunas de 200px de largura */
  max-width: 960px; /* largura máxima do container */
  margin: 32px auto; /* centraliza o container na tela */
  gap: 32px;
`;

export const Text = styled.h3`
  color: #181818;
  margin-top: 1.5rem;
  display: none;

  @media screen and (min-width: 768px){
    display: block;
  }
`;