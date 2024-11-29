import React from 'react';
import {usePagination} from "../../../hooks/usePagination";
import classes from "./Pagination.module.css"

const Pagination = ({pagesCount, changePage, currentPage}) => {
    const pagesArray = usePagination(pagesCount)
    return (
        <div className={classes.page__wrapper}>
            {pagesArray.map(p =>
                <span onClick={() => changePage(p)}
                      className={p === currentPage ? classes.page + " " + classes.page__current : classes.page}
                      key={p}>{p}</span>
            )}
        </div>
    );
};

export default Pagination;