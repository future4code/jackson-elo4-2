import React from 'react';
import {HeaderContainer, Filtro, Menu} from "./styled"
import Logo from '../../Img/logo.png'



class Header extends React.Component {
  render(){
    return (
    <HeaderContainer>
       <div>
          <img  src={Logo}
           alt="logo"
           />
           <Filtro>
           <input value={this.props.valorBusca}
                onChange={this.props.mudarBusca}
                placeholder="Pesquisar produto"
            />

              

            </Filtro>

            <Menu>
              <span onClick={this.props.clickPaginaInicial}> Início </span>
              <span onClick={this.props.clickFornecedor}> Sou fornecedor </span>
            </Menu>

          </div>
    </HeaderContainer>
    );
  };
};
export default Header;