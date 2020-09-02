import React from 'react';
import Carrinho from '../Carrinho/Carrinho';
import {
  CategoriasContainer,
  ContainerPaginaInicial,
  CarrinhoContainer,
  CardsContainer
} from './styled.js';

export default class PaginaInicial extends React.Component {


  state = {
    carrinho: [],
    carrinhoAberto: false
  }
// reservado para logica do carrinho












// 

  renderizaCarrinho =  () => {
    let resultado = 0;
    this.state.carrinho.forEach(produto => {
      if (produto) {
        resultado += (produto.preco * produto.quantidade)
      }
    });
    return (
        <CarrinhoContainer>
          <h2>Carrinho</h2>
          {this.state.carrinho.map(produto => {
            if (produto.quantidade > 0 ) {
              return <Carrinho 
              tituloProduto={produto.titulo} 
              quantidadeProduto={produto.quantidade} 
              clickDeletarProduto={() => this.deletarProdutoCarrinho(produto.id)}
            />
            }
          })}
          <p><strong>Total: R$ {resultado},00</strong></p>
        </CarrinhoContainer>
    )
  }; 


  render() {
    return (
      <div>
        <ContainerPaginaInicial carrinhoAberto={this.state.carrinhoAberto}>
          <CategoriasContainer>
            <h3 onClick={this.props.clickAcessorios}>Acessórios</h3>
            <h3 onClick={this.props.clickBijuteria}>Bijuteria</h3>
            <h3 onClick={this.props.clickCasamento}>Casamento</h3>
            <h3 onClick={this.props.clickDecoracao}>Decoração</h3>
            <h3 onClick={this.props.clickEco}>Eco</h3>
            <h3 onClick={this.props.clickFesta}>Festa</h3>
            <h3 onClick={this.props.clickInfantil}>Infantil</h3>
            <h3 onClick={this.props.clickPapelaria}>Papelaria</h3>
            <h3 onClick={this.props.clickPets}>Pets</h3>
            <h3 onClick={this.props.clickReligiosos}>Religiosos</h3>
          </CategoriasContainer>
          <CardsContainer>
            acima teremos o header
            e aqui ficarão os cards
          </CardsContainer>
          {this.state.carrinhoAberto && this.renderizaCarrinho()}
        </ContainerPaginaInicial>
      </div>
    );
  };
};
  


