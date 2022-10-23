import {useSelector} from "react-redux";

const MovieTitle = ({title,original_title}) => {
    const {checked,cb,cw} = useSelector(state => state.themeReducer);

    return (
        <div>
            <h2 style={checked ? cw : cb}>{title}</h2>
            {title !== original_title ?
                <h4 style={checked ? cw : cb}>{original_title}</h4> : ''}
        </div>
    );
};

export {MovieTitle};