import React from 'react';
import {Container} from './styled';

class ProdutoUnicoInicial extends React.Component {
  render() {
    return (
      <Container>
        <h1>{this.props.tituloProduto} - R${this.props.preco},00</h1>
        <div>
          <img src={this.props.foto1}/>
          <img src={this.props.foto2}/>
          <img src={this.props.foto3}/>
        </div>
        <p>{this.props.descricaoProduto}</p>
        <ul>
          <h3>Método de pagamento:</h3>
          <li>{this.props.metodoPag}</li>
          <li>Em até {this.props.parcelas}x</li>
        </ul>
        <br></br>
        <p>Categoria: {this.props.categoria}</p>
      </Container>
    );
  };
};
export default ProdutoUnicoInicial;