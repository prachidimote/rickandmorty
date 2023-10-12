import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, pageNumber, setPageNumber }) => {
   return (
    <div className="d-flex justify-content-center gap-4 my-4">
    <ReactPaginate 
    forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
   className='pagination'
   nextLabel='Next'
   previousLabel = 'Prev'
   pageClassName='page-item'
   pageLinkClassName='page-link'
   activeClassName='active'
   onPageChange={(data) => {
    setPageNumber(data.selected + 1);
   }}
  //  nextClassName='btn btn-primary'
  // previousClassName='btn btn-primary'
   pageCount={info?.pages}/> 
   </div>
   )
};

export default Pagination;