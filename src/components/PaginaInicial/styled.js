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
  background: #ebebeb; 
  padding-left: 55px;
`
export const CardsColecao = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const HeaderCards = styled.div`
  padding-top: 20px;
  height: 50px;
  text-align: center;
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
  bottom: 50px;
  right: 50px;
  :hover{
    background: #47a9ad;
  }
`