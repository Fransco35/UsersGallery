import { usePagination, DOTS} from '../../../hooks/use-pagination'
import classnames from 'classnames';
import './Pagination.css'

const Pagination = (props) => {

    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
      } = props;
    
      const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
      });

      if (currentPage === 0 || paginationRange.length < 2) {
        return null;
      }

      const onNext = () => {
        onPageChange(currentPage + 1);
      };
    
      const onPrevious = () => {
        onPageChange(currentPage - 1);
      };


      let lastPage = paginationRange[paginationRange.length - 1]

    return (
      <ul
      className={classnames('pagination-container')}
    >
       {/* Left navigation arrow */}
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === 1
        })}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange.map((pageNumber, index) => {
         
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
        return <li className="pagination-item dots" key={index}>&#8230;</li>;
        }
		
        // Render our Page Pills
        return (
          <li
            className={classnames('pagination-item', {
              selected: pageNumber === currentPage
            })}
            onClick={() => onPageChange(pageNumber)}
            key={index}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage
        })}
        onClick={onNext}

      >
        <div className="arrow right" />
      </li>
    </ul>
    )
}

export default Pagination