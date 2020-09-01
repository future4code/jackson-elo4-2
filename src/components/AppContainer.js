import React, { Component } from 'react'
import PaginaInicial from "./PaginaInicial/PaginaInicial"
import ProdutoUnico from "./ProdutoUnico/ProdutoUnico"
import CategoriaUnica from "./CategoriaUnica/CategoriaUnica"
import Fornecedor from "./Fornecedor/Fornecedor"
import Footer from "./Footer/Footer"

export  class AppContainer extends React.Component {
  render() {
    return (
      <div>

        <PaginaInicial/>
        <ProdutoUnico/>
        <CategoriaUnica/>
        <Fornecedor/>
        <Footer/>


      </div>
    )
  }
}
