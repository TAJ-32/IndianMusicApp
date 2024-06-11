import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Login ({ LoggedIn, setLoggedIn}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const onButtonClick = () => {
        
    }

    return (
        <div className={'mainContainer'}>
            <div className={'titleContainer'}>
                <h2>LOGIN PAGE</h2>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input 
                    value={email}
                    placeholder="Email: "
                    onChange={(email_in) => setEmail(email_in.target.value)}
                    className={'inputBox'}
                />
                <label className="errorLabel">{emailError}</label>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input
                    value={password}
                    placeholder="Password: "
                    onChange={(pass_in) => setPassword(pass_in.target.value)}
                    className={'inputBox'}
                />
                <label className="errorLabel">{passwordError}</label>
            </div>
            <br />
            <div className={'buttonContainer'}>
                <input className={'inputButton'} type="button" onClick={onButtonClick} value={"Log In"} />
            </div>
        </div>
    )
}

export default Login;