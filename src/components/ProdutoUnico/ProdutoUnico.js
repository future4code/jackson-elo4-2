import React from 'react'
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';



export default class ProdutoUnico extends React.Component {
  state = {
    produtoAtual: ""
  }
  
  render() {
    return (
      <div>

        <div>
          <h1>{this.props.tituloProduto} - R$ {this.props.preco},00</h1>
        </div>

        <div>
          <img src={this.props.foto1}/>
          <img src={this.props.foto2}/>
          <img src={this.props.foto3}/>
        </div>
        <div>
          <ul>
            <h3>Método de pagamento:</h3>
            <li>{this.props.metodoPag}</li>
            <li>Em até {this.props.parcelas}x</li>
          </ul>
          <br></br>
          <p>Categoria: {this.props.categoria}</p>
          
        </div>
        <Button
          onClick={this.props.clickAddCarrinho}
          variant="contained"
          color="gray"
          startIcon={<AddShoppingCartIcon />}
          ><small>Add ao carrinho</small> 
        </Button>
  
      </div>
    )
  }
}

{/* <CardContent>

<CardContent>

        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>

      </CardContent> */}

