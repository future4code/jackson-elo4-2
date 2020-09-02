import styled from 'styled-components';

export const CategoriasContainer = styled.div`
  width: 300px;
`
export const ContainerPaginaInicial = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.carrinhoAberto ? '1fr 3fr 1fr' : '1fr 3fr'};
`
export const CarrinhoContainer = styled.div`
  @media (max-width: 415px){
    width: 90vw;
    height: 90vh;
    bottom: 5vh;
    margin: auto;
    position: fixed;
    background: white;
    padding: 10px;
    border-radius: 15px;
  }
`
export const CardsContainer = styled.div`
  
`