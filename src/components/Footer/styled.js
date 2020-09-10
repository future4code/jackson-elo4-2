import React from 'react'
import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding-top: 0;
  text-align: center;
  width: 100%;
`
export const RedesSociais = styled.div`
  background-color: #f2d0a7;
  > p {
    margin: 0;
    padding: 15px 0 0 0;
  }
`
export const Icones = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 15px 0;
  > img {
    width: 35px;
    cursor: pointer;
  }
`
export const DescricaoFooter = styled.div`
  background: #5ce1e6;
  height: 50px;
  > p {
    margin: 0;
    padding: 15px 0;
    @media (max-width: 415px) {
      padding: 10px 0 0 0;
    }
  }
`


