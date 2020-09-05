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
    width:100vw;
    height:67%;
    
   
  
  }
    > img {
      height:50px;
      @media (max-width: 415px){
        height: 30px;
        margin-left: 15px;

      }

    }
    > button {
      width: 10px;
    }
  }
`;

export const Menu = styled.div`
 @media (max-width: 415px){
        display: flex;
       align-self: center;
       width: 100%;
 }
    > span{
        color: #4e4f4f;
        margin-left: 45px;
        font-weight: 500;
        font-size: 110%;
        cursor:pointer;
        :hover{
            color:#5ce1e6; }

        @media (max-width: 415px){
          font-size: 12px;
          margin-left: 27px;

         
  }
    }
`
   
               
         