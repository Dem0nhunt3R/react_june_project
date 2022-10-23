import {useSelector} from "react-redux";

const MovieOverview = ({title, overview}) => {
    const {checked, cb, cw} = useSelector(state => state.themeReducer);
    return (
        <div style={{width: '80%'}}>
            <h3 style={checked ? cw : cb}>About "{title}": </h3>
            <p style={checked ? cw : cb}>{overview}</p>
        </div>
    );
};

export {MovieOverview};