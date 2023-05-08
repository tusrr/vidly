import React from 'react';
import _ from 'lodash';
const Pagination = (props) => {

    const {itemsCount, pageSize} = props;
    const pagesCount = Math.ceil(itemsCount / pageSize); //  this willl return smallest integer , greater than or equal to the floating pt num
    console.log(pagesCount);
    if(pagesCount===1) return null;
    const pages =_.range(1,pagesCount+1);
    //this will return an array from  1 to n(takes n+1) 
    //[1,2,3,....pages].map() : lodash : js library with a bunch of utility fn 

    return (
        // <React.Fragment>
        <nav>
            <ul className="pagination">
            {pages.map(page =>(<li key={page} className="page-item">
                <a className="page-link">{page}</a>
                </li> 
            ))}
                
            </ul>
        </nav>
        // </React.Fragment>
    );
    };

 
export default Pagination;

