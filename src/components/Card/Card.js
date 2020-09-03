import React from 'react';
import {DivCard} from './styled';

class Card extends React.Component {
  render(){
    return (
    <DivCard>
      <img src={this.props.foto}/>
      <h4>{this.props.titulo}</h4>
      <p>R$ {this.props.preco}</p>
      <button>Add ao carrinho</button>
    </DivCard>
    );
  };
};
export default Card;