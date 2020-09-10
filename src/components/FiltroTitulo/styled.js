import styled from 'styled-components';

export const Filtro = styled.div`
  > input {
    height: 15px;
    outline: none;
    border: none;
    box-shadow: 0 0 3px gray;
    padding: 5px;
    border-radius: 3px;
    width: 300px;
    margin-right: 105px;
    @media (max-width: 415px) {
      margin: 10px 0;
      width: 250px;
      margin-right: 0;
    }
  }
` 
