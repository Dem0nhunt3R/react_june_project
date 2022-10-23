import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

import {Header} from "../components";
import css from './MainLayout.module.css'

const MainLayout = () => {
    const {checked} = useSelector(state => state.themeReducer);

    return (
            <div className={css.container}>
                <Header/>
                <div className={[checked ? css.black : css.white, css.outlet].join(' ')}><Outlet/></div>
            </div>
    );
};

export {MainLayout};