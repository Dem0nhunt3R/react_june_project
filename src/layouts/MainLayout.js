import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

import {Header} from "../components";

const MainLayout = () => {
    const {checked,bg} = useSelector(state => state.themeReducer);

    return (
        <div>
            <Header/>
            <div style={(checked? bg : {})} ><Outlet/></div>
        </div>
    );
};

export {MainLayout};