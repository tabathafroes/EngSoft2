import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom'

import swal from 'sweetalert2';


import Button from '@material-ui/core/Button';

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
    
    const register =  async () =>{ 
        const { value: formValues } = await swal.fire({
            title: 'Cadastro',
            html:
              '' +
              '<input id="name" class="swal2-input" placeholder="Nome Completo:">' +
              '<input id="email" class="swal2-input" type="email" placeholder="Email: exemple@exemple.com">' +
              '<input id="password" class="swal2-input" type="password" placeholder="Senha: ">' +
              '<input id="number" class="swal2-input" type="tel" placeholder="Telefone: "> <input id="url" class="swal2-input" type="url" placeholder="Link Rede Social: ">' +
              'Ja eh funcionario da empresa? <input id="isWorker" class="swal2-input" type="checkbox" placeholder="Sim"> <input id="isNotWorker" class="swal2-input" type="checkbox" placeholder="Nao">' +
              'Curriculo: <input id="curriculum" class="swal2-input" type="image" >',
            focusConfirm: false,
            preConfirm: () => {
              return [
                document.getElementById('name').value,
                document.getElementById('email').value
              ]
            }
            
            
        //swal("Cadastro do Usuario", "Cadastre-se para ter acesso ao banco de vagas disponiveis!",{content: "input",html:
        //'<input id="swal-input1" class="swal2-input">' +
        //'<input id="swal-input2" class="swal2-input">',}).then((value) => {
        //    window.console.log(value)
        //    if (value) window.location.replace("/vagas")
            
        })
        if (formValues) {
            swal.fire(JSON.stringify(formValues)).then((value) => {
                    if (value) window.location.replace("/vagas")
                    
                })
          }
    }

  return (
    <>
        <div style={{backgroundColor:"#e0e0e0"}}>
            <Div>
                <Spam text1={'Processo Seletivos GSW'} text2={'Realize seu cadastro e participe das etapas online!'} />
            </Div>
            <Div>
                
                    <Button style={{ backgroundColor:"white" }} onClick={() => register()}>
                        <strong>Cadastre-se</strong>
                    </Button>
            </Div>
        </div>
    </>
    );
}