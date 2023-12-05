import { NavLink } from 'react-router-dom'
import { useState } from "react";
import s from './Auth.module.css'
import Button from '../../components/UI/button/Button';

export function Auth() {
    const [showSignupInput, setShowSignupInput] = useState(false);
    const handleSignupClick = (e) => {
        e.preventDefault();
        setShowSignupInput(true);
      };
    return (
<div className={s.page}>
      <div className={s.wrapper}>
                <div className={s.modalBlock}>
                    <form className={s.form}>
                        <div className={s.modalLogo}>
                            <NavLink to="/">
                                <img src="/img/logo/blackLogo.svg" alt="logo" />
                            </NavLink>
                        </div>
                        <input
          placeholder="Логин"
          className={s.login}
          type="text"
        />
         <input
          placeholder="Пароль"
          className={s.login}
          type="password"
        />
          {showSignupInput ? (

             <input
             placeholder="Повторите пароль"
             className={s.login}
             type="password"
           />
           ) : (
           
            <Button
            text={"Войти"}
            color={"purple"}
          >
            </Button>
            
            )}
            <Button
            text={" Зарегистрироваться"}
            color={"light"}
            onClick={handleSignupClick}>
            </Button>
                    </form>
                </div>
                </div>
                </div>   
    );
}
