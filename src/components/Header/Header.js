import React from 'react';
import {HeaderContainer, Filtro} from "./styled"


class Header extends React.Component {
  render(){
    return (
    <HeaderContainer>
       <div>
          <img  src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F56dee66c-706c-46b5-bbcc-da3a26c77e13%2F3.png?table=block&id=346cc3e8-d869-469e-bf24-298de602529f&width=770&userId=&cache=v2"
           alt="logo"
           />
           <Filtro>
              <input/>
              <button> Enviar </button>
            </Filtro>
            <button> Carrinho </button>
            <span onClick={this.props.clickPaginaInicial}> Inicio </span>
            <span onClick={this.props.clickFornecedor}> Sou fornecedor </span>
          </div>
    </HeaderContainer>
    );
  };
};
export default Header;