import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;


function PageDefault({ children }) { //em vez de colocar props ja chamo o filho com {} dentro de () logo em baixo tem a tag <> vazia que é chamada de fragmentada ou morta eliminandando varias div
    return (
        <>//
            <Menu />
                <Main>
                    {children}
                </Main>
            <Footer />
        </>
    );
}

export default PageDefault;