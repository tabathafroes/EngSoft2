import React from 'react';

import Button from '@material-ui/core/Button';

import swal from 'sweetalert2';

export default ({type}) =>{
    const style = { backgroundColor:"white", margin:"10px"}
    if(type === 'user') return (
        <Button style={style} onClick={() => registerUser()}>
            <strong>Cadastre-se</strong>
        </Button>
    )
    if(type === 'employee') return (
        <Button style={style} onClick={() => registerEmployee()}>
            <strong>Cadastre um funcionario</strong>
        </Button>
    )
}

const registerUser = async () =>{ 
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
    })
    if (formValues) {
        swal.fire(JSON.stringify(formValues)).then((value) => {
                if (value) window.location.replace("/vagas")
                
            })
      }
}

const registerEmployee = async () =>{ 
    const { value: formValues } = await swal.fire({
        title: 'Cadastro de funcionario',
        html:
          '' +
          '<input id="email" class="swal2-input" type="email" placeholder="Email Institucional: ">' +
          '<input id="password" class="swal2-input" type="password" placeholder="Senha: ">' +
          '<input id="passwordConfirm" class="swal2-input" type="password" placeholder="Confirme a Senha: ">',
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById('email').value
          ]
        }
    })
    if (formValues) {
        swal.fire(JSON.stringify(formValues)).then((value) => {
                if (value) window.location.replace("/vagas")
                
            })
      }
}
