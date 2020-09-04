import React from 'react';
import {Filtro} from './styled';

class FiltroTitulo extends React.Component {
  render() {
    return (
      <Filtro>
        <input
          value={this.props.valorBusca}
          onChange={this.props.mudarBusca}
          placeholder="Pesquisar produto"
        />
      </Filtro>
    );
  };
};
export default FiltroTitulo;