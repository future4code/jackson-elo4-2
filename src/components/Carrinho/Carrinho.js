import React from 'react';
import styled from 'styled-components'
import {Button,createMuiTheme, MuiThemeProvider} from '@material-ui/core'
import {ListaCarrinho, LinhasCarrinho,EditarBotao} from './styled'


const myTheme = createMuiTheme({
  palette:{
    primary: {
      main:"#f2f2f2"
    },
    secondary:{
      main:"#f28c0f"
    }
  }
})

class Carrinho extends React.Component {
  render(){
    return (

      <MuiThemeProvider theme={myTheme}>
    <ListaCarrinho>
          <LinhasCarrinho>
            {this.props.quantidadeProduto} x  {this.props.tituloProduto}
            <EditarBotao><Button variant="contained" color="primary" size="small" onClick={this.props.clickDeletarProduto}>Deletar</Button></EditarBotao>
          </LinhasCarrinho>
    </ListaCarrinho>
    </MuiThemeProvider>
    );
  };
};
export default Carrinho;
