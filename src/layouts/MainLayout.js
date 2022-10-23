import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

import {Header} from "../components";
import css from './MainLayout.module.css'
import {currentTime} from "../utils/currentTime";
import {useEffect, useState} from "react";

const MainLayout = () => {
    const {checked} = useSelector(state => state.themeReducer);
    const [timeColor, setTimeColor] = useState(false);

    useEffect(() => {
        const time = currentTime();
        if (time >= 21 || time < 6) {
            setTimeColor(true);
        } else {
        console.log(time)
            setTimeColor(false);
        }
    }, [timeColor]);

    return (
        <div className={[css.container, timeColor?css.black2:css.white].join(' ')}>
            <div className={css.content}>
                <Header/>
                <div className={[checked ? css.black1 : css.white, css.outlet].join(' ')}><Outlet/>
                </div>
            </div>
        </div>
    );
};

export {MainLayout};