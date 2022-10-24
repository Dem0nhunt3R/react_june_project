import {useDispatch, useSelector} from "react-redux";
import ReactPaginate from "react-paginate";
import {useNavigate, useParams} from "react-router-dom";

import {movieActions} from "../../redux";
import css from './MyPagination.module.css'

const MyPagination = ({endpoint, genre}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {q} = useParams();
    const {currentPage, total_Pages} = useSelector(state => state.movieReducer);
    const {checked} = useSelector(state => state.themeReducer);
    const {totalPages} = useSelector(state => state.movieReducer);
    console.log(q)
    const handlePageChange = (e) => {
        if(q){
            console.log(q)
            navigate(endpoint+'/'+q+'/'+(e.selected + 1));

        }
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
        <>
            {totalPages > 1 && <div className={css.container}>
                <ReactPaginate
                    forcePage={currentPage - 1}
                    onPageChange={handlePageChange}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={3}
                    pageCount={totalPages >= 500 ? 500 : totalPages}
                    className={css.Pagination}
                    activeLinkClassName={[css.current, checked ? css.black : css.white].join(' ')}
                    breakLinkClassName={[css.link, checked ? css.white : css.black].join(' ')}
                    pageLinkClassName={[css.link, checked ? css.white : css.black].join(' ')}
                    previousLabel={<i className="fa-solid fa-circle-arrow-left"></i>}
                    previousLinkClassName={[css.link, checked ? css.white : css.black, css.navLink].join(' ')}
                    nextLabel={<i className="fa-solid fa-circle-arrow-right"></i>}
                    nextLinkClassName={[css.link, checked ? css.white : css.black, css.navLink].join(' ')}
                />
            </div>}
        </>
    );
}

export {MyPagination};
