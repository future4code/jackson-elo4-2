import styled from 'styled-components';

export const DivCard = styled.div`
  width: 25%;
  border-radius: 15px;
  box-shadow: 2px 2px 4px #c7c7c7;
  background: white;
  padding: 10px;
  color: #616161;
  margin: 0 37px 37px 0;
  text-align: center;
  cursor: pointer;
  > img {
    border-radius: 15px 15px  0 0 ;
    height: 270px;
    width: 100%
  }
  @media (max-width: 415px) {
    width: 60%;
    margin: 10px 0;
  }
`