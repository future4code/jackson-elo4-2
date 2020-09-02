import React from 'react';
import axios from 'axios';
import { 
  DivFormulario, 
  HeaderContainer,
  H1,
  BotaoCadastrar,
  Rotulo,
  FormInput,
} from './styled';


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
      photos: [this.state.fotos],
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
        <HeaderContainer>
          <div>
            <img  src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F56dee66c-706c-46b5-bbcc-da3a26c77e13%2F3.png?table=block&id=346cc3e8-d869-469e-bf24-298de602529f&width=770&userId=&cache=v2"
            alt="logo"
            />
            <button onClick={this.props.clickConsumidor}>Voltar para a Página Inicial</button>
          </div>
        </HeaderContainer>
       
        <DivFormulario>
          <H1>Cadastro de produto</H1>
          <Rotulo for="nome">Nome:</Rotulo>
          <FormInput type="text" id="nome" 
            value={this.state.nomeProduto}
            onChange={this.onChangeNomeInput}
          />
          <Rotulo for="desc">Descrição:</Rotulo>
          <FormInput type="text" id="desc"
            value={this.state.descricao}
            onChange={this.onChangeDescInput}
          />
          <Rotulo for="preco">Preço:</Rotulo>
          <input type="number" id="preco" 
            value={this.state.preco}
            onChange={this.onChangePrecoInput}
          />
          <Rotulo for="categoria">Categoria:</Rotulo>
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
          <Rotulo for="foto">Foto (URL):</Rotulo>
          <FormInput type="url" id="foto" placeholder="Link para foto 1" value={this.state.fotos} onChange={this.onChangeFotosInput}></FormInput>
          <FormInput type="url" id="foto" placeholder="Link para foto 2" value={this.state.fotos} onChange={this.onChangeFotosInput}></FormInput>
          <FormInput type="url" id="foto" placeholder="Link para foto 3" value={this.state.fotos} onChange={this.onChangeFotosInput}></FormInput>
          <p>Método de pagamento:</p>
          <Rotulo for="pag1">Cartão de crédito</Rotulo>
          <input type="checkbox" id="pag1"
            value={this.state.pagMetodo}
            onChange={this.onChangePagInput}
          />
          <Rotulo for="pag2">Cartão de débito</Rotulo>
          <input type="checkbox" id="pag2"
            value={this.state.pagMetodo}
            onChange={this.onChangePagInput}
          />
          <Rotulo for="pag3">Boleto</Rotulo>
          <input type="checkbox" id="pag3"
            value={this.state.pagMetodo}
            onChange={this.onChangePagInput} 
          />
          <Rotulo for="preco">Número de parcelas:</Rotulo>
          <input type="number" id="preco"
            value={this.state.parcelas}
            onChange={this.onChangeParcelasInput}
          />

          <BotaoCadastrar onClick={this.adicionarProdutos}>CADASTRAR</BotaoCadastrar>


        </DivFormulario>

  

      </div>
    );
  };
};
export default Fornecedor;