import { values } from 'mobx';
import React, { FC, useState } from 'react';

const LoginForm: FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <input 
            type='text'
            onChange={ (e) => {setEmail(e.target.value)}}
            placeholder='Логин'>
            </input>
            <input
            type='text'
            onChange={(e) => {setPassword(e.target.value)}}
            placeholder='Пароль'>
            </input>
            <button>Войти</button>
        </div>
    );
};

export default LoginForm;