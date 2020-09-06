import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';

export const DivCentro = styled.div`
  @media (max-width: 415px){
    display:flex;
  justify-content:center;
  }
`

export const DivFormulario = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  border:2px solid orange;
  padding: 1%;
  @media (max-width: 415px) {
    width:90vw;
    display:flex;
    }
`
export const H1 = styled.h1`
  font-size: 25px;
  color: #F28C0F;
  @media (max-width: 415px) {
  }
`

export const Rotulo = styled.label`
  margin: 6px;
  @media (max-width: 415px) {
    width:100%;
  }
`

export const HeaderContainer = styled.div`
  div{
    display:flex;
    width:80%;
    margin: 10px auto;
    justify-content:space-between;
    img{
    width:147px;
     @media (max-width: 415px) {
      width:30%;
      height:50%;
      display:flex;
    }}}
    border-top:2px solid orange;
    height:70px;
    box-shadow: 0 0 3px gray;
    @media (max-width: 415px) {
      width:100%;
      height:100%;
      display:flex;
    }
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
    justifyContent:"center",
    flexWrap: 'wrap',
    
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
    
  },


}));

   