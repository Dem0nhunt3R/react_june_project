import {useDispatch, useSelector} from "react-redux";
import ReactPaginate from "react-paginate";
import {useNavigate} from "react-router-dom";

import {movieActions} from "../../redux";
import css from './MyPagination.module.css'

const MyPagination = ({endpoint, genre}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {currentPage} = useSelector(state => state.movieReducer);
    const {checked} = useSelector(state => state.themeReducer);

    const handlePageChange = (e) => {
        if (e.selected + 1 === 1) {
            navigate(endpoint);
        } else {
            if (genre) {
                dispatch(movieActions.setCurrentPage(e.selected + 1))
                navigate(endpoint + '/' + (genre ? genre : '') + '/page/' + (e.selected + 1));
            } else {
                dispatch(movieActions.setCurrentPage(e.selected + 1))
                navigate(endpoint + '/page/' + (e.selected + 1));
            }
        }
    }

    return (
        <div className={css.container}>
            <ReactPaginate
                forcePage={currentPage - 1}
                onPageChange={handlePageChange}
                marginPagesDisplayed={1}
                pageRangeDisplayed={3}
                pageCount={500}
                className={css.Pagination}
                activeLinkClassName={[css.current, checked ? css.black : css.white].join(' ')}
                breakLinkClassName={[css.link, checked ? css.white : css.black].join(' ')}
                pageLinkClassName={[css.link, checked ? css.white : css.black].join(' ')}
                previousLabel={<i className="fa-solid fa-circle-arrow-left"></i>}
                previousLinkClassName={[css.link, checked ? css.white : css.black, css.navLink].join(' ')}
                nextLabel={<i className="fa-solid fa-circle-arrow-right"></i>}
                nextLinkClassName={[css.link, checked ? css.white : css.black, css.navLink].join(' ')}
            />
        </div>
    );
};

export {MyPagination};