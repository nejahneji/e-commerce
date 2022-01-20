import React from 'react'
import SignUp from '../../components/sign-up/suign-up.component'
import SignIn from '../../components/signin/sign-in-component'
import './sign-in-and-sign-up.styles.scss'

const SignInAndSignUpComponent = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignInAndSignUpComponent
