import styled from 'styled-components';

export const Container = styled.div`
  margin: 100px 100px;
  > div {
    display: flex;
    > img {
      width: 200px;
      border-radius: 10px;
      margin-right: 20px;
      box-shadow: 0 0 3px gray;
    }
  }
`