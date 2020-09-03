import React from 'react';
import Carrinho from '../Carrinho/Carrinho';
import Card from '../Card/Card';
import {
  CategoriasContainer,
  ContainerPaginaInicial,
  CarrinhoContainer,
  CardsContainer,
  CardsColecao,
  HeaderCards
} from './styled.js';

const produtos = [
  {
    id: 1,
    foto1: 'https://img.elo7.com.br/product/main/2B2130D/chapeu-personalizado-1-figura-nome-ou-frase-chapeu-de-praia.jpg',
    foto2: 'https://img.elo7.com.br/product/main/2AEA6E0/chapeu-personalizado-1-figura-nome-ou-frase-chapeu-de-praia.jpg',
    foto3: 'https://img.elo7.com.br/product/main/2AF2C2A/chapeu-personalizado-1-figura-nome-ou-frase-chapeu-de-praia.jpg',
    titulo: 'Chapéu personalizado',
    preco: 49.90,
    quantidade: 1
  },
  {
    id: 2,
    foto1: 'https://img.elo7.com.br/product/main/1A0252B/adesivo-de-parede-infantil-vingadores-crianca.jpg',
    foto2: 'https://img.elo7.com.br/product/main/1A0252F/adesivo-de-parede-infantil-vingadores-floresta.jpg',
    foto3: 'https://img.elo7.com.br/product/main/1A02533/adesivo-de-parede-infantil-vingadores-natureza.jpg',
    titulo: 'Adesivo de parede',
    preco: 10.00,
    quantidade: 1
  },
  {
    id: 3,
    foto1: 'https://img.elo7.com.br/product/zoom/2DBABFD/par-de-brincos-de-pressao-festa-festa.jpg',
    foto2: 'https://img.elo7.com.br/product/zoom/2DBABFE/par-de-brincos-de-pressao-festa-longo.jpg',
    foto3: 'https://img.elo7.com.br/product/zoom/2DBABFF/par-de-brincos-de-pressao-festa-brincos-de-pressao.jpg',
    titulo: 'Brincos de strass',
    preco: 50.00,
    quantidade: 1
  },
  {
    id: 4,
    foto1: 'https://img.elo7.com.br/product/main/1B0FDE2/robe-em-cetim-personalizado.jpg',
    foto2: 'https://img.elo7.com.br/product/main/2805696/robe-em-cetim-personalizado-promocao.jpg',
    foto3: 'https://img.elo7.com.br/product/main/2C78C7C/robe-em-cetim-personalizado-promocao.jpg',
    titulo: 'Robe de cetim',
    preco: 21.00,
    quantidade: 1
  },
  {
    id: 5,
    foto1: 'https://img.elo7.com.br/product/main/1DD63A0/semana-maluca-convite-de-casamento-r-0-79-convite-com-strass.jpg',
    foto2: 'https://img.elo7.com.br/product/main/1DD639E/semana-maluca-convite-de-casamento-r-0-79-meia-perola.jpg',
    foto3: 'https://img.elo7.com.br/product/main/2EAC041/promocao-convite-de-casamento.jpg',
    titulo: 'Convite de casamento',
    preco: 33.60,
    quantidade: 1
  },
  {
    id: 6,
    foto1: 'https://img.elo7.com.br/product/main/2C43D8C/botton-lgbtq.jpg',
    foto2: 'https://img.elo7.com.br/product/main/2C43DBE/botton-lgbtq-stonewall-50-anos.jpg',
    foto3: 'https://img.elo7.com.br/product/main/30B0F2F/botton-lgbtq-marrom-e-preto-e-trans-roupas.jpg',
    titulo: 'Botton LGBTQ+',
    preco: 4.50,
    quantidade: 1
  },
  {
    id: 7,
    foto1: 'https://img.elo7.com.br/product/zoom/21C15A0/fantasia-minions-presente.jpg',
    foto2: 'https://img.elo7.com.br/product/zoom/288447F/fantasia-infantil-minions-curto.jpg',
    foto3: 'https://img.elo7.com.br/product/zoom/2933C5D/fantasia-mulher-maravilha-infantil.jpg',
    titulo: 'Fantasia Minion',
    preco: 110.00,
    quantidade: 1
  },
  {
    id: 8,
    foto1: 'https://img.elo7.com.br/product/main/21810CA/presepio-em-gesso-15-pecas-20-cm.jpg',
    foto2: 'https://img.elo7.com.br/product/main/21810C7/presepio-em-gesso-15-pecas-20-cm.jpg',
    foto3: 'https://img.elo7.com.br/product/main/21810E1/presepio-em-gesso-15-pecas-20-cm.jpg',
    titulo: 'Presépio em gesso',
    preco: 250.00,
    quantidade: 1
  },
  {
    id: 9,
    foto1: 'https://img.elo7.com.br/product/zoom/A02B83/pulseira-folheado-olho-grego-festa.jpg',
    foto2: 'https://img.elo7.com.br/product/zoom/A02B84/pulseira-folheado-olho-grego-strass.jpg',
    foto3: 'https://img.elo7.com.br/product/zoom/A02B85/pulseira-folheado-olho-grego-moda.jpg',
    titulo: 'Pulseira olho grego',
    preco: 70.00,
    quantidade: 1
  },
  {
    id: 10,
    foto1: 'https://img.elo7.com.br/product/zoom/1F2B630/xilofone-brinquedo-de-madeira-separe-suas-tags-com-virgulas.jpg',
    foto2: 'https://img.elo7.com.br/product/zoom/1F2B631/xilofone-brinquedo-de-madeira-separe-suas-tags-com-virgulas.jpg',
    foto3: 'https://img.elo7.com.br/product/zoom/1F2B632/xilofone-brinquedo-de-madeira-separe-suas-tags-com-virgulas.jpg',
    titulo: 'Xilofone',
    preco: 50,
    quantidade: 1
  },
  {
    id: 11,
    foto1: 'https://img.elo7.com.br/product/main/214F591/lembrancinha-personalizada-para-catequista-catequese-catequese.jpg',
    foto2: 'https://img.elo7.com.br/product/main/227A48C/tag-personalizada-em-madeira-para-lembrancinhas-suculentas-convidados.jpg',
    foto3: 'https://img.elo7.com.br/product/main/227A48B/tag-personalizada-em-madeira-para-lembrancinhas-suculentas-mdf.jpg',
    titulo: 'Lembrança',
    preco: 15.00,
    quantidade: 1
  },
  {
    id: 12,
    foto1: 'https://img.elo7.com.br/product/main/32635EC/capa-para-o-livro-vade-mecum-personalizada-tradicional.jpg',
    foto2: 'https://img.elo7.com.br/product/main/32635FA/capa-para-o-livro-vade-mecum-personalizada-tradicional.jpg',
    foto3: 'https://img.elo7.com.br/product/main/2DDA664/capa-para-o-livro-vade-mecum-personalizada-tradicional.jpg',
    titulo: 'Livro Vade Mecum',
    preco: 43.00,
    quantidade: 1
  },
];

export default class PaginaInicial extends React.Component {
  state = {
    produtos,
    carrinho: [],
    carrinhoAberto: false,
    totalCarrinho: 0
  };

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
            <HeaderCards>Produtos visualizados</HeaderCards>
            <CardsColecao>
              {this.state.produtos.map(produto => {
                  return (
                    <Card
                    clickAddcarrinho={() => this.addAoCarrinho(produto.id)}
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
          <button onClick={this.alterarCarrinho}>
            abrir carrinho
          </button>
        </ContainerPaginaInicial>
      </div>
    );
  };
};
  


