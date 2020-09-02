import styled from 'styled-components';


export const DivFormulario = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2%;
  margin-top: 2%;
  border:2px solid orange;
  margin-left: 10%;
  margin-right: 10%;
`
export const H1 = styled.h1`
  font-size: 25px;
  color: #F28C0F;
`

export const BotaoCadastrar = styled.button`
  margin: 2%;
`

export const Rotulo = styled.label`
  margin: 6px;
`

export const FormInput = styled.input`
  width: 30vw;
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
