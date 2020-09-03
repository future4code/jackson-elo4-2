import styled from "styled-components";

export const HeaderContainer = styled.div`
  
  border-top: 2px solid orange;
  height: 70px;
  box-shadow: 0 0 3px gray;
 
  
  

  > div {
    display:flex;
    width: 80%;
    margin: 10px auto;
    justify-content: space-between;
    align-items:center;
    

    > img {
      
      height:50px;
      
    }
    > button {
      width: 10px;
    }
    
  }
 
`;
export const Filtro = styled.div`
    margin-bottom:7px;
  >input {
    margin-right:5px;
    width:29em;
    height:20px;
    outline:none;
    border:none;
    box-shadow: 0 0 3px gray;
    padding:7px;
    border-radius:3px
    
  }
 
`;

export const Menu = styled.div`
    > span{
        margin:0 15px;
        cursor:pointer;
        :hover{
            color:#5ce1e6;
        }
    }
`
   
               
         