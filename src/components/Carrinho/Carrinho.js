import React from 'react';
import styled from 'styled-components'

class Carrinho extends React.Component {
  render(){
    return (
    <ul>
          <li>
            {this.props.quantidadeProduto}x{this.props.tituloProduto}
            <button
              onClick={this.props.clickDeletarProduto}>Deletar</button>
          </li>
    </ul>
    );
  };
};
export default Carrinho;
