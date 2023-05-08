import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Login() {

    return (
        <>
            <div  class="login">
                <div class="login__container">
                    <h1 className="bg-red-500">Login</h1>
                    <form>
                        <h5 className="bg-red-500">Email</h5>
                        <input type="text" class="input-login-username" />
                        <h5>Password</h5>
                        <input type="password" class="input-login-password" />
                        <button type="submit" class="login__signInButton">Login</button>
                    </form>
                    <a href="./signup.html" class="login__registerButton"
                    >Register</a
                    >
                </div>
            </div>
        </>
    )
}

export default Login
