import React, {useState} from 'react'
import {Container,FormWrap,Icon,Form,FormButton,FormatContent,Text,FormatLabel,FormatInput,FormH1} from './RegisterElements'
import Axios from 'axios'

const Register = () => {

    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')
    const [password, setPassword] = useState('')
    const [esProfesor, setProfesor] = useState(0)

    const  registrarUser = async(e)=>{
        e.preventDefault()
        const newUser = {nombre, correo, telefono, password,esProfesor}
        const resp = await Axios.post('http://localhost:4000/users/create-user', newUser)
        const mensaje = resp.data.status
        console.log(mensaje)
        alert(mensaje)
    }

    return (
        <>
            <Container>
                < FormWrap>
                    <Icon to="/">dolla</Icon>
                    <FormatContent>
                        <Form onSubmit={registrarUser}>
                            <FormH1>Sign in to your account</FormH1>
                            <FormatLabel htmlFor='for'>Name</FormatLabel>
                            <FormatInput type='name' required onChange={e=>setNombre(e.target.value)}></FormatInput>
                            <FormatLabel htmlFor='for'>Email</FormatLabel>
                            <FormatInput type='email' required onChange={e=>setCorreo(e.target.value)}></FormatInput>
                            <FormatLabel htmlFor='for'>Password</FormatLabel>
                            <FormatInput type='password' required onChange={e=>setPassword(e.target.value)}></FormatInput>
                            <FormatLabel htmlFor='for'>Telefono</FormatLabel>
                            <FormatInput type='number' required onChange={e=>setTelefono(e.target.value)}></FormatInput>
                            <FormatLabel htmlFor='for'>Profesor</FormatLabel>
                            <FormatInput type='checkbox' onChange={e=>setProfesor(e.target.value)}/>
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