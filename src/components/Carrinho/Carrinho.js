import React from 'react';
// import styled from 'styled-components'

class Carrinho extends React.Component {
  render(){
    return (
    <div carrinhoAberto = {this.props.carrinhoAberto}>
        <h1>Carrinho teste</h1>
        <ul>
          <li>
            {this.props.quantidadeProduto}x{this.props.tituloProduto}
            <button
              onClick={this.props.clickDeletarProduto}>Deletar</button>
          </li>

        </ul>

      

    </div>
    );
  };
};
export default Carrinho;