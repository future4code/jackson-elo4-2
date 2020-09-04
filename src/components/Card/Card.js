import React from 'react';
import {DivCard} from './styled';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

class Card extends React.Component {
  render(){
    return (
    <DivCard>
      <img 
        src={this.props.foto} 
        onClick={this.props.clickProdUnico}
      />
      <h4>{this.props.titulo}</h4>
      <p>R$ {this.props.preco}</p>
      <Button
        onClick={this.props.clickAddCarrinho}
        variant="contained"
        color="gray"
        startIcon={<AddShoppingCartIcon />}
      ><small>Add ao carrinho</small> 
      </Button>
    </DivCard>
    );
  };
};
export default Card;