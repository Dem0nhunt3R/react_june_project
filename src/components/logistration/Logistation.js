import {NavLink} from "react-router-dom";

import css from './Logistration.module.css'

const Logistration = () => {

    return (
        <div className={css.container}>
            <NavLink to={'/login'} className={css.link}>Login</NavLink>
            <NavLink to={'/registration'} className={css.link}>Registration</NavLink>
        </div>
    );
};

export {Logistration};