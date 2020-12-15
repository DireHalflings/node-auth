import React, { useState } from 'react';
import './Register.css';

import axios from 'axios';

const Register = () => {

    const [message, setMessage] = useState('');

    const [emailInput, setEmailInput] = useState('');
    const [nameInput, setNameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [confirmPasswordInput, setConfirmPasswordInput] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!matchPassword(passwordInput, confirmPasswordInput)) {
            setMessage('Password confirmation must match.');
            return;
        }
        setMessage('');

        const newUser = {
            email: emailInput,
            name: nameInput,
            password: passwordInput
        };

        await axios.post('http://localhost:5000/users/', { ...newUser });

        setEmailInput('');
        setNameInput('');
        setPasswordInput('');
        setConfirmPasswordInput('');
    }

    const matchPassword = (pass, confirm) => pass === confirm;


    return ( 
        
        <form className="register-form">
            <h2>Sign Up</h2>
            <p>
                <input 
                    id="Email" 
                    name="Email" 
                    type="text" 
                    placeholder="Email" 
                    value={ emailInput } 
                    onChange={ e => setEmailInput(e.target.value) } 
                />
            </p>
            <p>
                <input 
                    id="Name" 
                    name="Name" 
                    type="text" 
                    placeholder="Name"                     
                    value={ nameInput } 
                    onChange={ e => setNameInput(e.target.value) }  
                />
            </p>
            <p>
                <input 
                    id="password" 
                    name="password" 
                    type="password" 
                    placeholder="Password" 
                    value={ passwordInput } 
                    onChange={ e => setPasswordInput(e.target.value) }  
                />
            </p>
            <p>
                <input 
                    id="confirm_password" 
                    name="confirm_password" 
                    type="password" 
                    placeholder="Confirm Password" 
                    value={ confirmPasswordInput } 
                    onChange={ e => setConfirmPasswordInput(e.target.value) }     
                />
            </p>
            <p>
                <input type="submit" value="Create My Account" id="submit" onClick={ e => handleSubmit(e) } />
                { message }
            </p>
        </form>
    );
}

export default Register;