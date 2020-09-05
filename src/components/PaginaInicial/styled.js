import styled from 'styled-components';

export const CategoriasContainer = styled.div`
  width: 200px;
  padding-left: 40px;
  padding-top: 30px;
  > h3 {
    margin-bottom: 25px;
    cursor: pointer;
    :hover {
      color: #f2970b;
    }
  }
  @media (width: 415px) {
    width: 100%;
  }
`
export const ContainerPaginaInicial = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.carrinhoAberto ? '1fr 3fr 1fr' : '1fr 3fr'};
  @media (max-width: 415px){
    display: flex;
    flex-direction: column-reverse;
  }
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
  background: #ebebeb; 
  padding-left: 55px;
  @media (max-width: 415px) {
    width: 100%;
    padding: 0 0 20px 0;
  }
`
export const CardsColecao = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 415px) {
    margin-top: 20px;
    text-align: center;
  }
`
export const HeaderCards = styled.div`
  padding-top: 20px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 415px) {
    flex-direction: column;
    text-align: center;
  }
`
export const ImgCarrinho = styled.div`
  width: 70px;
  height: 70px;
  background: #5ce1e6;
  border-radius: 50%;
  text-align: center;
  > img {
    margin-top: 12px;
  }
  border: 1px solid gray;
  cursor: pointer;
  position: fixed;
  bottom: 65px;
  right: 50px;
  :hover{
    background: #47a9ad;
  }
  @media (max-width: 415px){
    z-index: 10;
    bottom: 60px; 
    left: 20px;
  }
`
