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

export const Menu = styled.div`
    > span{
        color: #4e4f4f;
        margin-left: 45px;
        font-weight: 500;
        font-size: 110%;
        cursor:pointer;
        :hover{
            color:#5ce1e6;
        }
    }
`
   
               
         