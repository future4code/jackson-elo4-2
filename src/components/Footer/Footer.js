import React from 'react';
import {RedesSociais, Desenvolvedores}from "./styled.js";
import Facebook from "../../Img/Facebook.jpg"
import Instagram from "../../Img/Instagram.png";
import Twitter from "../../Img/Twitter.png";

class Footer extends React.Component {
  render(){
    return (
    <div>
    <RedesSociais>
      

        <p> Redes Sociais </p>
        <img src={Facebook}
        style={{
          width: "5%", height: "50%",
        }} />
        <img src={Instagram} 
        style={{
          width: "7%", height: "50%",
        }}
        />
        <img src={Twitter}
        style={{
          width: "5%", height:"50%",
        }}
        />
     

    </RedesSociais>
  
    <Desenvolvedores>
      <p> <b> Desenvolvido por Turma Jackson</b> </p>
    </Desenvolvedores>
    </div>
    );
  };
};
export default Footer;