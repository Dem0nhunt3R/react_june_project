import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {genreActions} from "../../redux";
import css from './NavBar.module.css';

const NavBar = () => {
    const dispatch = useDispatch();
    const {checked} = useSelector(state => state.themeReducer);
    const {genres} = useSelector(state => state.genreReducer);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        dispatch(genreActions.getAll());
        console.log(genres)
    }, []);

    return (
        <div className="btn-group">
            <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown"
                    aria-expanded="false">
                Action
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                <li>
                    <hr className="dropdown-divider"/>
                </li>
                <li><a className="dropdown-item" href="#">Separated link</a></li>
            </ul>
        </div>
    );
};

export {NavBar};