import React, { Component } from 'react';
import PaginaInicial from './PaginaInicial/PaginaInicial';
import ProdutoUnico from './ProdutoUnico/ProdutoUnico';
import CategoriaUnica from './CategoriaUnica/CategoriaUnica';
import Fornecedor from './Fornecedor/Fornecedor';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export class AppContainer extends React.Component {

  state = {
    paginaAberta: 'pagina-inicial'
  };

  // Funções para abrir as páginas após eventos de cliques:
  abreAcessorios = () => {
    this.setState({paginaAberta: 'categoria-acessorios'})
  };
  abreBijuteria = () => {
    this.setState({paginaAberta: 'categoria-bijuteria'})
  };
  abreCasamento = () => {
    this.setState({paginaAberta: 'categoria-casamento'})
  };
  abreDecoracao = () => {
    this.setState({paginaAberta: 'categoria-decoracao'})
  };
  abreEco = () => {
    this.setState({paginaAberta: 'categoria-eco'})
  };
  abreReligiosos = () => {
    this.setState({paginaAberta: 'categoria-religiosos'})
  };
  abreFesta = () => {
    this.setState({paginaAberta: 'categoria-festa'})
  };
  abreInfantil = () => {
    this.setState({paginaAberta: 'categoria-infantil'})
  };
  abrePapelaria = () => {
    this.setState({paginaAberta: 'categoria-papelaria'})
  };
  abrePets = () => {
    this.setState({paginaAberta: 'categoria-pets'})
  };
  abreProdutoUnico = () => {
    this.setState({paginaAberta: 'produto-unico'})
  };
  abreFornecedor = () => {
    this.setState({paginaAberta: 'fornecedor'})
  };
  abrePaginaInicial = () => {
    this.setState({paginaAberta: 'pagina-inicial'})
  };

  renderizaPaginas = () => {
    switch (this.state.paginaAberta) {
      case 'pagina-inicial':
        return (
            <PaginaInicial
              clickAcessorios={this.abreAcessorios}
              clickBijuteria={this.abreBijuteria}
              clickCasamento={this.abreCasamento}
              clickDecoracao={this.abreDecoracao}
              clickEco={this.abreEco}
              clickReligiosos={this.abreReligiosos}
              clickFesta={this.abreFesta}
              clickInfantil={this.abreInfantil}
              clickPapelaria={this.abrePapelaria}
              clickPets={this.abrePets}
            />
        );
      case 'fornecedor':
        return (
          <Fornecedor
            clickConsumidor={this.abrePaginaInicial}
          />
        )  
      case 'produto-unico':
        return (
          <ProdutoUnico/>
        ); 
      case 'categoria-acessorios':
        return (
          <CategoriaUnica
            titulo={'Acessórios'}
          />
      );
      case 'categoria-bijuteria':
        return (
          <CategoriaUnica
          titulo={'Bijuteria'}
          />
      );
      case 'categoria-casamento':
        return (
          <CategoriaUnica
          titulo={'Casamento'}
          />
        )
      case 'categoria-decoracao':
        return (
          <CategoriaUnica
          titulo={'Decoração'}
          />
        );
      case 'categoria-eco':
        return (
          <CategoriaUnica
          titulo={'Eco'}
          />
        );
      case 'categoria-religiosos':
        return (
          <CategoriaUnica
          titulo={'Religiosos'}
          />
        );
      case 'categoria-festa':
        return (
          <CategoriaUnica
          titulo={'Festa'}
          />
        );
      case 'categoria-infantil':
        return (
          <CategoriaUnica
          titulo={'Infantil'}
          />
        );  
      case 'categoria-papelaria':
        return (
          <CategoriaUnica
          titulo={'Papelaria'}
          />
        );
      case 'categoria-pets':
        return (
          <CategoriaUnica
          titulo={'Pets'}
          />
        );
    };
  };
  render() {
    return (
      <div>
        {this.state.paginaAberta === 'fornecedor' ||
          <Header
            clickPaginaInicial={this.abrePaginaInicial}
            clickFornecedor={this.abreFornecedor}
          />
        }
        {this.renderizaPaginas()}
        <Footer/>
      </div>
     
    );
  };
};
