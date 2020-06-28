import React from 'react';
import styled from 'styled-components';

import RegisterButton from './ActionButtons/RegisterButton'
import LogInButton from './ActionButtons/LogInButton'

export default () => {
    const Div = styled.div`
    padding: 100px 50px 100px 100px;
    `;
    const Title = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
    font-family: 'Montserrat', sans-serif;
    `; 
    const SubTitle = styled.h3`
    font-family: 'Montserrat', sans-serif;
        `;

    const Spam = ({ text1, text2 }) => (
        <div>
            <Title>
                {text1}
            </Title>
            <SubTitle>
                {text2}
            </SubTitle>
        </div>
    )

  return (
    <>
        <div style={{backgroundColor:"#e0e0e0"}}>
            <Div>
                <Spam text1={'Processo Seletivos GSW'} text2={'Realize seu cadastro e participe das etapas online!'} />
            </Div>
            <Div>
                    <RegisterButton type={'user'} />
                    <RegisterButton type={'employee'} />
                    <LogInButton type={'employee'}/>

            </Div>
        </div>
    </>
    );
}