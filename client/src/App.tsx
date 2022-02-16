import React, { FC, useContext, useEffect, useState } from 'react';
import { Context } from './index';
import LoginForm from './components/LoginForm';
import { observer } from 'mobx-react-lite';
import { IUser } from './models/IUser';
import UserService from './service/UserService';

const App: FC = () => {
  const { store } = useContext(Context)
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
    }
  }, [])

  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (error) {

    }
  }

  if (store.isLoading) {
    return (
      <div>Загрузка...</div>
    )
  }

  if (!store.isAuth) {
    return (
      <LoginForm />
    )
  }

  return (
    <div>

      <h1>{store.isAuth ? `Пользователь авторизован ${store.user.email}` : 'Пользователь не авторизован'}</h1>
      <h1>{store.user.isActivated ? 'Аккаунт активирован' : 'Аккаунт не активирован'}</h1>
      <button onClick={() => store.logout()}>Выйти</button>
      <div>
        <button onClick={getUsers}>Получить пользователей</button>
      </div>
      {users.map((user) => {
        return (
          <div key={user.email}>{user.email}</div>
        )
      })}
    </div>
  );
};

export default observer(App);