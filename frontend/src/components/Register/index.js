import React, {useState} from 'react'
import {Container,FormWrap,Icon,Form,FormButton,FormatContent,Text,FormatLabel,FormatInput,FormH1} from './RegisterElements'
import Axios from 'axios'
import Swal from 'sweetalert2'
import {Redirect} from 'react-router-dom'

const Register = () => {

    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')
    const [password, setPassword] = useState('')

    const  registrarUser = async(e)=>{
        e.preventDefault()
        const newUser = {nombre, correo, telefono, password}
        const resp = await Axios.post('http://localhost:4000/users/register', newUser)
        const mensaje = resp.data.status
        console.log(mensaje)
        //alert(mensaje)
        Swal.fire({
            //position: 'top-end',
            icon: 'success',
            title: mensaje,
            showConfirmButton: false,
            timer: 1000
          })
          e.target.reset()
    }

    return (
        <>
            <Container>
                < FormWrap>
                    <Icon to="/">GestoProf</Icon>
                    <FormatContent>
                        <Form action="signin" onSubmit={registrarUser}>
                            <FormH1>Sign in to your account</FormH1>
                            <FormatLabel htmlFor='for'>Name</FormatLabel>
                            <FormatInput type='name' required onChange={e=>setNombre(e.target.value)}></FormatInput>
                            <FormatLabel htmlFor='for'>Email</FormatLabel>
                            <FormatInput type='email' required onChange={e=>setCorreo(e.target.value)}></FormatInput>
                            <FormatLabel htmlFor='for'>Password</FormatLabel>
                            <FormatInput type='password' required onChange={e=>setPassword(e.target.value)}></FormatInput>
                            <FormatLabel htmlFor='for'>Telefono</FormatLabel>
                            <FormatInput type='number' required onChange={e=>setTelefono(e.target.value)}></FormatInput>
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormatContent>
                </FormWrap>
            </Container>  
        </>
    )
}

export default Register