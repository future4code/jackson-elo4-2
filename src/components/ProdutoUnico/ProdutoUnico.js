import React from 'react'
import Carrinho from "../Carrinho/Carrinho"
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

export default class ProdutoUnico extends React.Component {
  state = {
    produtoAtual: ""
  }
  
  render() {
    return (
      <div>
       <div>
        src={this.props.fotos} 
       </div>
       <div>
        <h4>{this.props.nomeProduto}</h4>
        <p>R$ {this.props.preco}</p>
        <p>Categoria: {this.props.categoria}</p>
        <p>Descrição: {this.props.descricao}</p>
        <p>Método de pagamento aceito: {this.props.pagMetodo} </p>
        <p>Número máximo de parcelas: {this.props.parcelas}</p>
       </div>
       <Button
          onClick={this.props.clickAddCarrinho}
          variant="contained"
          color="gray"
          startIcon={<AddShoppingCartIcon />}
          ><small>Add ao carrinho</small> 
        </Button>
        
          
        <Carrinho/>
          
  
      </div>
    )
  }
}
