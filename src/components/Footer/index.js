import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <p>
        Seu portal de filmes ©️
        {' '}
        <a href="http://localhost:3000/">
          worldflix
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
