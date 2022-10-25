import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {movieActions} from "../../redux";

const SearchForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register, reset, handleSubmit} = useForm();

    const submit = (e) => {
        console.log(e);
            dispatch(movieActions.search({query: e.search.split(' ').join('+')}))
            navigate('search/' + e.search.split(' ').join('+'));
            reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'Search'} {...register('search')}/>
        </form>
    );
};

export {SearchForm};