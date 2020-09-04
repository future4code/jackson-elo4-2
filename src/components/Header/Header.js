import React from 'react';
import {HeaderContainer, Filtro, Menu} from "./styled"
import Logo from '../../Img/logo.png'

class Header extends React.Component {
  render(){
    return (
      <HeaderContainer>
        <div>
          <img src={Logo} alt="logo"/>
          <Menu>
            <span onClick={this.props.clickPaginaInicial}> Início </span>
            <span onClick={this.props.clickQuemSomos}> Quem somos </span>
            <span onClick={this.props.clickFornecedor}> Sou fornecedor </span>
          </Menu>
        </div>
      </HeaderContainer>
    );
  };
};
export default Header;