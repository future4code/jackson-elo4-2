import React from 'react';
import axios from 'axios';
import { DivFormulario } from './styled';


class Fornecedor extends React.Component {

  state = {
    produtos: [],
    nomeProduto: "",
    descricao: "",
    preco: 0,
    pagMetodo: "",
    categoria: "",
    fotos: [],
    parcelas: 0,
  }

  onChangeNomeInput = (e) => {
    this.setState({nomeProduto: e.target.value})
  }
  onChangeDescInput = (e) => {
    this.setState({descricao: e.target.value})
  }
  onChangePrecoInput = (e) => {
    this.setState({preco: e.target.value})
  }
  onChangePagInput = (e) => {
    this.setState({pagMetodo: e.target.value})
  }
  onChangeCategoriaInput = (e) => {
    this.setState({categoria: e.target.value})
  }
  onChangeFotosInput = (e) => {
    this.setState({fotos: e.target.value})
  }
  onChangeParcelasInput = (e) => {
    this.setState({parcelas: e.target.value})
  }

  adicionarProdutos = () => {
    const body = {
      name: this.state.nomeProduto,
      description: this.state.descricao,
      price: this.state.preco,
      paymentMethod: this.state.pagMetodo,
      category: this.state.categoria,
      photos: this.state.fotos,
      installments: this.state.parcelas
    }
    const request = axios.post("https://us-central1-labenu-apis.cloudfunctions.net/eloFourTwo/products", body,
      {
        headers: {

        }
      } 
    )

    request
    .then((resposta) => {
      console.log(resposta)
      this.setState({ produtos: resposta.data })
      alert("O produto foi cadastrado com sucesso!")
    })
    .catch(error => {
      (error.message === 'Request failed with status code 400')
      ? alert('Não foi possível criar  produto, pois ele já existe!')
      : alert('Desculpe, aconteceu um erro ' + error.message)
      console.log(error)
    });
  }

  render(){
    return (
      <div>
        <header>
  
          <button onClick={this.props.clickConsumidor}>Voltar para a Página Inicial</button>
        
        </header>
        <DivFormulario>
          <h1>Cadastro de produto</h1>
          <label for="nome">Nome:</label>
          <input type="text" id="nome" 
            value={this.state.nomeProduto}
            onChange={this.onChangeNomeInput}
          />
          <label for="desc">Descrição:</label>
          <input type="text" id="desc"
            value={this.state.descricao}
            onChange={this.onChangeDescInput}
          />
          <label for="preco">Preço:</label>
          <input type="number" id="preco" 
            value={this.state.preco}
            onChange={this.onChangePrecoInput}
          />
          <label for="categoria">Categoria:</label>
          <select id="categoria">
            <option value={this.state.categoria} onChange={this.onChangeCategoriaInput}>Acessórios</option>
            <option value={this.state.categoria} onChange={this.onChangeCategoriaInput}>Bijuteria</option>
            <option value={this.state.categoria} onChange={this.onChangeCategoriaInput}>Casamento</option>
            <option value={this.state.categoria} onChange={this.onChangeCategoriaInput}>Decoração</option>
            <option value={this.state.categoria} onChange={this.onChangeCategoriaInput}>Eco</option>
            <option value={this.state.categoria} onChange={this.onChangeCategoriaInput}>Festa</option>
            <option value={this.state.categoria} onChange={this.onChangeCategoriaInput}>Infantil</option>
            <option value={this.state.categoria} onChange={this.onChangeCategoriaInput}>Papelaria</option>
            <option value={this.state.categoria} onChange={this.onChangeCategoriaInput}>Pets</option>
            <option value={this.state.categoria} onChange={this.onChangeCategoriaInput}>Religiosos</option>
          </select>
          <label for="foto">Foto (URL):</label>
          <input type="url" id="foto" placeholder="Link para foto 1" value={this.state.fotos} onChange={this.onChangeFotosInput}></input>
          <input type="url" id="foto" placeholder="Link para foto 2" value={this.state.fotos} onChange={this.onChangeFotosInput}></input>
          <input type="url" id="foto" placeholder="Link para foto 3" value={this.state.fotos} onChange={this.onChangeFotosInput}></input>
          <p>Método de pagamento:</p>
          <label for="pag1">Cartão de crédito</label>
          <input type="checkbox" id="pag1"
            value={this.state.pagMetodo}
            onChange={this.onChangePagInput}
          />
          <label for="pag2">Cartão de débito</label>
          <input type="checkbox" id="pag2"
            value={this.state.pagMetodo}
            onChange={this.onChangePagInput}
          />
          <label for="pag3">Boleto</label>
          <input type="checkbox" id="pag3"
            value={this.state.pagMetodo}
            onChange={this.onChangePagInput} 
          />
          <label for="preco">Número de parcelas:</label>
          <input type="number" id="preco"
            value={this.state.parcelas}
            onChange={this.onChangeParcelasInput}
          />

          <button onClick={this.adicionarProdutos}>CADASTRAR</button>


        </DivFormulario>

      </div>
    );
  };
};
export default Fornecedor;