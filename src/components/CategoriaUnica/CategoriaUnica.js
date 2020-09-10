import React from 'react';
import styled from 'styled-components';
import Carrinho from '../Carrinho/Carrinho';
import ReactDOM from 'react-dom';
import Filtro from './Filtro.js';
import {Filtros} from './styled.js';
import Ordem from './Ordem.js';
import Card from '../Card/Card.js';


  
export default class CategoriaUnica extends React.Component {
 render(){
    return (
      <div>
        <Filtros>
          <h3>Filtros:</h3>
          <Filtro/>
          <Ordem/>
        </Filtros>
        <Card/>  {/*   teste */}

          <Carrinho/>
  
      </div>
    );
  }
}