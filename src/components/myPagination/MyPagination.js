import {useDispatch, useSelector} from "react-redux";
import ReactPaginate from "react-paginate";
import {useNavigate} from "react-router-dom";

import {movieActions} from "../../redux";

const MyPagination = ({endpoint}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {currentPage} = useSelector(state => state.movieReducer);

    const handlePageChange = (e) => {
        if (e.selected + 1 === 1) {
            navigate(endpoint)
        } else {
            navigate(endpoint + '/page/' + (e.selected + 1))
        }
        dispatch(movieActions.setCurrentPage(e.selected + 1))
    }

    return (
        <ReactPaginate
            forcePage={currentPage - 1}
            onPageChange={handlePageChange}
            nextRel={'next'}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            pageCount={500}
            containerClassName={'pagination justify-content-center my-4'}
            pageClassName={'page-item'}
            activeClassName={'active'}
            breakLinkClassName={'page-link'}
            pageLinkClassName={'page-link'}
            previousLabel={'previous'}
            previousLinkClassName={'page-link'}
            nextLabel={'next'}
            nextLinkClassName={'page-link'}
        />
    );
};

export {MyPagination};