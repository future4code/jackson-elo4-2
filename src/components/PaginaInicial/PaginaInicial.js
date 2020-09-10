import React from 'react';
import Carrinho from '../Carrinho/Carrinho';
import Card from '../Card/Card';
import CarrinhoLogo from '../../Img/carrinho-logo.svg';
import ProdutoUnicoInicial from '../ProdutoUnicoInicial/ProdutoUnicoInicial';
import FiltroTitulo from '../FiltroTitulo/FiltroTitulo';
import {ProdutosInicio} from '../ProdutosInicio';
import {
  CategoriasContainer,
  ContainerPaginaInicial,
  CarrinhoContainer,
  CardsContainer,
  CardsColecao,
  HeaderCards,
  ImgCarrinho
} from './styled.js';

const produtos = ProdutosInicio;

export default class PaginaInicial extends React.Component {
  state = {
    produtos,
    carrinho: [],
    carrinhoAberto: false,
    totalCarrinho: 0, 
    paginaAberta: 'pagina-inicial',
    valorBusca: ''
  };

  onChangeBusca = e => {
    this.setState({valorBusca: e.target.value})
  }

  // Usando ciclos de vida, pois aqui não estamos usando API
  componentDidUpdate() {
    localStorage.setItem('carrinho', JSON.stringify(this.state.carrinho))
  };

  componentDidMount() {
    this.setState({carrinho: JSON.parse(localStorage.getItem('carrinho')) || []})
  };
  
  alterarCarrinho = () => {
    (this.state.carrinhoAberto === false) 
    ? this.setState({carrinhoAberto: true})
    : this.setState({carrinhoAberto: false})  
  };

  filtrarProdutos() {
    const {produtos, valorBusca} = this.state
    let produtosFiltrados = produtos.filter(produto => {
    return produto.titulo.toLowerCase().indexOf(valorBusca.toLowerCase()) > -1
  })
  return produtosFiltrados
  };

  // Função ao clicar em adicionar ao carrinho
  addAoCarrinho = (id) => {
    const produtoSelecionado = this.state.produtos.find(produto => {
      return produto.id === id
    })
    const posicaoDoProdutoNoCarrinho = this.state.carrinho.findIndex(produto => {
      return produto.id === id
    });
    const existeNoCarrinho = posicaoDoProdutoNoCarrinho > -1
    let novoCarrinho = [...this.state.carrinho]
    if (existeNoCarrinho) {
      novoCarrinho = novoCarrinho.map(produto => {
        if (produto.id === id ) {
          return {
            ...produto,
            quantidade: produto.quantidade + 1
          }
        }
        return produto
      })
    } else {
      novoCarrinho.push(produtoSelecionado)
    }
    this.setState({carrinho: novoCarrinho})
  };

  deletarProdutoCarrinho = (id) => {
    const carrinhoComItensDeletados = this.state.carrinho.filter(produto => {
      return (produto.id === id) ? false : true
    });
    this.setState({carrinho: carrinhoComItensDeletados});
  };

  // Está no return aquilo que vai aparecer dentro do carrinho
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
    );
  }; 
  
  abreProdutoUnicoInicial = () => {
    this.setState({paginaAberta: 'produto-unico-inicial'})
  };

  render() {
    const produtosFiltrados = this.filtrarProdutos()
    const produtoUnicoInicial = () => {
      if (this.state.paginaAberta === 'produto-unico-inicial') {
       return (
        this.state.produtos.map(produto => {
          return (
            <ProdutoUnicoInicial
              tituloProduto={produto.titulo}
              preco={produto.preco}
              foto1={produto.foto1}
              foto2={produto.foto2}
              foto3={produto.foto3}
              descricaoProduto={produto.descricao}
              metodoPag={produto.metodoPagamento}
              parcelas={produto.numeroParcelas}
              categoria={produto.categoria}
            />
          )
        })
       )
      };
    };
    return (
      <div>
        {produtoUnicoInicial() ||
        (<ContainerPaginaInicial carrinhoAberto={this.state.carrinhoAberto}>
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
            <HeaderCards>
              Produtos visualizados:
              <FiltroTitulo
                valorBusca={this.state.valorBusca}
                mudarBusca={this.onChangeBusca}
              />
            </HeaderCards>
            <CardsColecao>
              {produtosFiltrados.map(produto => {
                  return (
                    <Card
                    clickProdUnico={this.abreProdutoUnicoInicial}
                    clickAddCarrinho={() => this.addAoCarrinho(produto.id)}
                    foto={produto.foto1}
                    titulo={produto.titulo}
                    preco={produto.preco}
                  />
                  )
                })
              }
            </CardsColecao>
          </CardsContainer>
          {this.state.carrinhoAberto && this.renderizaCarrinho()}
          <ImgCarrinho onClick={this.alterarCarrinho}>
            <img src={CarrinhoLogo}/>
          </ImgCarrinho>
        </ContainerPaginaInicial>)
        }
      </div>
    );
  };
};
  


