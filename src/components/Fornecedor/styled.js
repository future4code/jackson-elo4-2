import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';


export const DivFormulario = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2%;
  margin-top: 2%;
  border:2px solid orange;
  margin-left: 10%;
  margin-right: 10%;
  padding: 1%;
`
export const H1 = styled.h1`
  font-size: 25px;
  color: #F28C0F;
`

export const Rotulo = styled.label`
  margin: 6px;
`

export const HeaderContainer = styled.div`
    > div{
        display:flex;
        width:80%;
        margin: 10px auto;
        justify-content:space-between;
        > img{
            width:50px;
        }
    }
    border-top:2px solid orange;
    height:70px;
    box-shadow: 0 0 3px gray;

`
export const myTheme = createMuiTheme({
  palette:{
    primary: {
      main:"#59D9D9"
    },
    secondary:{
      main:"#F28C0F"
    }
  }
})
export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));