import {useNavigate} from "react-router-dom";

import css from './MyButton.module.css'

const MyButton = ({style, dis, cb, children, pathname}) => {
    const navigate = useNavigate();
    return (
        <button
            onClick={() => {
                cb();
                navigate('/' + pathname)
            }}
            style={style}
            disabled={dis}
            className={css.button + (dis ? (' ' + css.disabled) : '')}>
            {children}
        </button>
    );
};

export {MyButton};