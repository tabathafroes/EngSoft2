import React from 'react';

import Button from '@material-ui/core/Button';

import swal from 'sweetalert2';

export default ({type}) =>{
    const style = { backgroundColor:"white", margin:"10px"}
    if(type === 'user') return (
        <Button style={style} onClick={() => logInUser()}>
            <strong>Entrar</strong>
        </Button>
    )
    if(type === 'employee') return (
        <Button style={style} onClick={() => logInEmployee()}>
            <strong>Entrar como Funcionario</strong>
        </Button>
    )
}

const logInUser = async () =>{ 
    const { value: formValues } = await swal.fire({
        title: 'LogIn',
        html:
          '' +
          '<input id="email" class="swal2-input" type="email" placeholder="Email: exemple@exemple.com">' +
          '<input id="password" class="swal2-input" type="password" placeholder="Senha: ">',
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

const logInEmployee = async () =>{ 
    const { value: formValues } = await swal.fire({
        title: 'LogIn de funcionario',
        html:
          '' +
          '<input id="email" class="swal2-input" type="email" placeholder="Email Institucional: ">' +
          '<input id="password" class="swal2-input" type="password" placeholder="Senha: ">',
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
