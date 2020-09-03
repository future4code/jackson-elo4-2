import React from 'react';
import axios from 'axios';
import { MuiThemeProvider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { 
  DivFormulario, 
  HeaderContainer,
  H1,
  Rotulo,
  myTheme,
  useStyles
} from './styled';

class Fornecedor extends React.Component {

  state = {
    produtos: [],
    fotos: [],
    nomeProduto: "",
    descricao: "",
    preco: 0,
    pagMetodo: "",
    categoria: "",
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
  onChangeFoto1Input = (e) => {
    this.state.fotos.push(e.target.value)
    this.setState({fotos: this.state.fotos})
  }
  onChangeFoto2Input = (e) => {
    this.state.fotos.push(e.target.value)
    this.setState({fotos: this.state.fotos})
  }
  onChangeFoto3Input = (e) => {
    this.state.fotos.push(e.target.value)
    this.setState({fotos: this.state.fotos})
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
    console.log(this.state)
    const request = axios.post("https://us-central1-labenu-apis.cloudfunctions.net/eloFourTwo/products", body,
      {
        headers: {

        }
      } 
    )

    request
    .then((resposta) => {
      console.log(resposta)
      this.setState({ 
        nomeProduto: "",
        descricao: "",
        preco: 0,
        pagMetodo: "",
        categoria: "",
        parcelas: 0,
        fotos: [],
      })
      alert("O produto foi cadastrado com sucesso!")
    })
    .catch((error) => {
      (error.message === 'Request failed with status code 400')
      ? alert('Não foi possível criar  produto, pois ele já existe!')
      : alert('Desculpe, aconteceu um erro ' + error.message)
      console.log(error)
    });
    this.setState({ 
      nomeProduto: "",
      descricao: "",
      preco: 0,
      pagMetodo: "",
      categoria: "",
      parcelas: 0,
      fotos: [],
    })
  }

  render(){
    return (
      <MuiThemeProvider theme={myTheme}>
        <HeaderContainer>
          <div>
            <img  src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F56dee66c-706c-46b5-bbcc-da3a26c77e13%2F3.png?table=block&id=346cc3e8-d869-469e-bf24-298de602529f&width=770&userId=&cache=v2"
            alt="logo"
            />
            <Button 
              onClick={this.props.clickConsumidor} variant="contained" color="gray">Voltar para a Página Inicial</Button>
          </div>
        </HeaderContainer>
       
        <DivFormulario>
          <H1>CADASTRO DE PRODUTO</H1>
          <Rotulo for="nome">Nome:</Rotulo>
          <TextField 
            label="" 
            variant="outlined" 
            style={{ width: 400 }} 
            type="text" 
            id="nome" 
            value={this.state.nomeProduto}
            onChange={this.onChangeNomeInput}
          />
          <Rotulo for="desc">Descrição:</Rotulo>
          <TextField 
            label="" 
            variant="outlined" 
            style={{ width: 400 }} 
            type="text" 
            id="desc"
            value={this.state.descricao}
            onChange={this.onChangeDescInput}
          />
          <Rotulo for="preco">Preço:</Rotulo>
          <TextField 
            label="" 
            variant="outlined" 
            type="number" 
            id="preco" 
            value={this.state.preco}
            onChange={this.onChangePrecoInput}
          />
          <Rotulo for="categoria">Categoria:</Rotulo>
          <Select
            variant="outlined" 
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select"
            color="primary"
            style={{ width: 200 }}
            onChange={this.onChangeCategoriaInput}>
            <MenuItem value={""}></MenuItem>
            <MenuItem value={"acessorios"}>Acessórios</MenuItem>
            <MenuItem value={"bijuteria"}>Bijuteria</MenuItem>
            <MenuItem value={"casamento"}>Casamento</MenuItem>
            <MenuItem value={"decoracao"}>Decoração</MenuItem>
            <MenuItem value={"eco"}>Eco</MenuItem>
            <MenuItem value={"festa"}>Festa</MenuItem>
            <MenuItem value={"infantil"}>Infantil</MenuItem>
            <MenuItem value={"papelaria"}>Papelaria</MenuItem>
            <MenuItem value={"pets"}>Pets</MenuItem>
            <MenuItem value={"religiosos"}>Religiosos</MenuItem>
          </Select>
          <Rotulo for="foto">Foto (URL):</Rotulo>
          <TextField 
            label="" 
            variant="outlined" 
            style={{ width: 400 }}
            type="url" id="foto" 
            placeholder="Link para foto 1" 
            onChange={this.onChangeFoto1Input}>
          </TextField>
          <TextField 
            label="" 
            variant="outlined" 
            style={{ width: 400 }} 
            type="url" 
            id="foto" 
            placeholder="Link para foto 2" 
            onChange={this.onChangeFoto2Input}>
          </TextField>
          <TextField 
            label="" 
            variant="outlined" 
            style={{ width: 400 }} 
            type="url" 
            id="foto" 
            placeholder="Link para foto 3" 
            onChange={this.onChangeFoto3Input}>
          </TextField>
          <p>Método de pagamento:</p>
          <FormControlLabel
            value={"credito"}
            control={<Checkbox color="primary" />}
            label="Cartão de crédito"
            labelPlacement="end"
            onChange={this.onChangePagInput}
          />
          <FormControlLabel
            value={"debito"}
            control={<Checkbox color="primary" />}
            label="Cartão de débito"
            labelPlacement="end"
            onChange={this.onChangePagInput}
          />
          <FormControlLabel
            value={"boleto"}
            control={<Checkbox color="primary" />}
            label="Boleto"
            labelPlacement="end"
            onChange={this.onChangePagInput}
          />
          <Rotulo for="preco">Número de parcelas:</Rotulo>
          <TextField 
            label="" 
            variant="outlined" 
            type="number" 
            id="preco"
            value={this.state.parcelas}
            onChange={this.onChangeParcelasInput}
          />
          <br></br>
          <Button 
            onClick={this.adicionarProdutos} 
            color="secondary" 
            variant="contained"
            style={{ width: 200 }} 
            >
            <strong>CADASTRAR</strong>
          </Button>

        </DivFormulario>

      </MuiThemeProvider>
    );
  };
};
export default Fornecedor;