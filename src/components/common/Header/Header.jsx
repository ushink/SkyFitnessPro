import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, ChevronUp } from 'lucide-react'
import {
    LOGIN_ROUTE,
    MAIN_ROUTE,
    REGISTRATION_ROUTE,
} from '../../../utils/constants'
import { useState } from 'react'
import NavMenu from '../../UI/navbar/NavMenu'
import s from './Header.module.css'
import Button from '../../UI/button/Button'
// import { redirect } from 'react-router-dom'

function Header() {
    const { pathname } = useLocation()
    const [visible, setVisible] = useState(false)
    const toggleVisibility = () => setVisible((e) => !e)

    const isPageMain = pathname === MAIN_ROUTE

    const logoPath = isPageMain
        ? '/img/logo/whiteLogo.svg'
        : '/img/logo/blackLogo.svg'

    if (pathname === LOGIN_ROUTE || pathname === REGISTRATION_ROUTE)
        return <></>

    return (
        <div className={s.header}>
            <Link to={MAIN_ROUTE} className={s.logo}>
                <img src={logoPath} alt="logo" />
            </Link>
            {isPageMain ? (
                // return redirect("/login")
                 <Link to='/login' >
                 <Button
      text={"Войти"}
      color={"mainpurple"}
    
    >
      </Button>
          </Link>
            ) : (
                <div className={s.user} onClick={toggleVisibility}>
                    <div className={s.userAvatar} />
                    <span className={s.userName}>Сергей</span>
                    <div>{visible && <NavMenu />}</div>
                    {visible ? <ChevronUp /> : <ChevronDown />}
                </div>
            )}
        </div>
    )
}

export default Header
