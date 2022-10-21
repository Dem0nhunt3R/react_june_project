import {ThemeSwitcher} from "../themeSwitcher/ThemeSwitcher";
import {Logo} from "../logo/Logo";
import {Logistration} from "../logistration/Logistation";
import css from './UserBar.module.css'

const UserBar = () => {

    return (
        <div className={css.container}>
            <ThemeSwitcher/>
            <Logo/>
            <Logistration/>
        </div>
    );
};

export {UserBar};