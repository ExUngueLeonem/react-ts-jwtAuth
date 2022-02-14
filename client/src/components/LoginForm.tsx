import { values } from 'mobx';
import React, { FC, useState } from 'react';

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            console.log(email, password)
            }}>
            <input 
            type='text'
            onChange={ (e) => {setEmail(e.target.value)}}
            value={email}
            placeholder='Логин'>
            </input>
            <input
            type='text'
            onChange={(e) => {setPassword(e.target.value)}}
            value={password}
            placeholder='Пароль'>
            </input>
            <button>Войти</button>
            <button>Регистрация</button>
        </form>
    );
};

export default LoginForm;