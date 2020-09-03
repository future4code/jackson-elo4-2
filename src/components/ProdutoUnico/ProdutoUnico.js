import React from 'react'
import Carrinho from "../Carrinho/Carrinho"

export default class ProdutoUnico extends React.Component {
  state = {
    produtoAtual: ""
  }

  // componentDidMount(){
  //   getShowById(this.props.produtoId)
  //     .then((resposta) => {
  //       this.setState({ produtoAtual: resposta.data })
  //     })
  //     .catch((erro) => console.log(erro))
  // }
  
  render() {
    return (
      <div>
        {this.state.produtoAtual}
        <div>
          <img
            src={this.state.produtoAtual.photo}
            alt={this.state.produtoAtual.name}
          />
        </div>
        <div>
          <h1>{this.state.produtoAtual.name}</h1>
          {this.state.produtoAtual.map((item) => {
                return <li key={item}>{item}</li>;
              })}
        </div>
          
          
          
        <Carrinho/>
          
  
      </div>
    )
  }
}
