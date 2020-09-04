import React from 'react';
import {RedesSociais, Desenvolvedores}from "./styled.js";
import Facebook from "../../Img/Facebook.jpg"
import Instagram from "../../Img/Instagram.png";
import Twitter from "../../Img/Twitter.png";
import {Container} from './styled';

class Footer extends React.Component {
  render(){
    return (
    <Container>
    <RedesSociais>
        
     <div>
     <h3> Redes Sociais: </h3>
     </div>

        <div>
          <img src={Facebook}
        style={{
          width: "39%", height: "50%",
        }} />
        </div>

        <div>
        <img src={Instagram} 
        style={{
          width: "39%", height: "50%",
        }}
        />
        </div>

        <div>
        <img src={Twitter}
        style={{
          width: "10%", height:"50%",
        }}
        />
        </div>

   

    </RedesSociais>
  
    <Desenvolvedores>
      <p> <b> Desenvolvido por Turma Jackson</b> </p>
    </Desenvolvedores>
    </Container>
    );
  };
};
export default Footer;