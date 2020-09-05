import React from 'react';
import Facebook from "../../Img/Facebook.png"
import Instagram from "../../Img/Instagram.png";
import Twitter from "../../Img/Twitter.png";
import Linkedin from "../../Img/Linkedin.png";
import {
  FooterContainer, 
  RedesSociais, 
  Icones,
  DescricaoFooter
} from './styled';


class Footer extends React.Component {
  render(){
    return (
      <FooterContainer>
        <RedesSociais>
          <p>Siga-nos nas redes sociais:</p>
          <Icones>
            <img src={Facebook} onClick='www.facebook.com.br'/>
            <img src={Instagram} onClick='www.instagram.com.br'/>
            <img src={Twitter} onClick='www.twitter.com.br'/>
            <img src={Linkedin} onClick='www.linkedin.com.br'/>
          </Icones>
        </RedesSociais>
        <DescricaoFooter>
          <p>Projeto Elo4 - por Carolina Della Nina, Thiago de Brito, Yvini Mayza, Luana Pereira e Alice Souza.</p>
        </DescricaoFooter>
      </FooterContainer>
    );
  };
};
export default Footer;