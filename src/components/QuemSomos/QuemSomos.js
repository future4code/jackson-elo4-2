import React from 'react';
import {QuemSomosContainer} from './styled';
import Equipe from '../../Img/equipe.jpg'

class QuemSomos extends React.Component {
  render() {
    return (
      <QuemSomosContainer>
        <h1>Quem somos</h1>
        <img src={Equipe}/>
        <p>Muito mais que um site, o Elo4 nasceu em 2008 com a missão de transformar
           a vida das pessoas através de um ambiente humanizado de compra e venda 
           que conecta e inspira, conferindo significado a cada transação realizada. 
           Trabalhamos para desenvolver as melhores tecnologias e 
          oferecer aos vendedores soluções simples e práticas para 
          o gerenciamento de suas vendas e para os compradores, uma 
          experiência de compra fora de série.</p>
        <p></p>
      </QuemSomosContainer>
    );
  };
};
export default QuemSomos;