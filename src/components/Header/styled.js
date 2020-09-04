import styled from "styled-components";

export const HeaderContainer = styled.div`
  border-top: 2px solid orange;
  height: 70px;
  box-shadow: 0 0 3px gray;
  @media (max-width: 415px){
  width:100%;
  }
   
  > div {
    display:flex;
    width: 80%;
    margin: 10px auto;
    justify-content: space-between;
    align-items:center;

    @media (max-width: 415px){
    display:flex;
    align-items:center;
    width:100vh;
   
  
  }
    > img {
      height:50px;
      @media (max-width: 415px){
        width:50px;
        height:50px;
        margin-left: 45px;
      }

    }
    > button {
      width: 10px;
    }
  }
`;

export const Menu = styled.div`
    > span{
        color: #4e4f4f;
        margin-left: 45px;
        font-weight: 500;
        font-size: 110%;
        cursor:pointer;
        :hover{
            color:#5ce1e6;
            @media (max-width: 415px){
              font-size:90%;
            }
        }
    }
`
   
               
         