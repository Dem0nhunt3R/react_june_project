import ReactSwitch from "react-switch";
import {useDispatch, useSelector} from "react-redux";

import {themeActions} from "../../redux";
import css from './ThemeSwitcher.module.css'

const ThemeSwitcher = () => {
    const {checked} = useSelector(state => state.themeReducer);
    const dispatch = useDispatch();

    return (
        <div className={css.container}>
            <ReactSwitch
                checked={checked}
                onChange={() => dispatch(themeActions.toggle(!checked))}
                onColor={'#fff'}
                offColor={'#555'}
                offHandleColor={'#000'}
                onHandleColor={'#000'}
                checkedIcon={<i className="fa-solid fa-sun" style={{color: 'gold', marginLeft: '5px'}}></i>}
                uncheckedIcon={<i className="fa-solid fa-moon" style={{color: 'gold', marginLeft: '8px'}}></i>}
                height={24}
                width={50}
                handleDiameter={20}/>
        </div>
    );
};

export {ThemeSwitcher};