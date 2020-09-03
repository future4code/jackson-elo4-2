import React from 'react';
import {HeaderContainer, Filtro, Menu} from "./styled"



class Header extends React.Component {
  render(){
    return (
    <HeaderContainer>
       <div>
          <img  src="https://files.slack.com/files-pri/TLAVDH7C2-F019JRKNGS3/logo.png"
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