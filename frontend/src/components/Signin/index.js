import React from 'react'
// import { Button } from '../ButtonElements'
import {Container,FormWrap,Icon,Form,FormButton,FormatContent,Text,FormatLabel,FormatInput,FormH1,IconRe} from './SigninElements'


const SignIn = () => {
    return (
        <>
            <Container>
                < FormWrap>
                    <Icon to="/">GestoProf</Icon>
                    <FormatContent>
                        <Form action="#">
                            <FormH1>Sign in to your account</FormH1>
                            <FormatLabel htmlFor='for'>Email</FormatLabel>
                            <FormatInput type='email' required></FormatInput>
                            <FormatLabel htmlFor='for'>Password</FormatLabel>
                            <FormatInput type='password' required></FormatInput>
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot password</Text>
                            <IconRe to="/register">Registrate aqui</IconRe>
                        </Form>
                    </FormatContent>
                </FormWrap>
            </Container>  
        </>
    )
}

export default SignIn
