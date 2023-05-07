import React from 'react';
const Pagination = (props) => {

    const {itemsCount, pageSize} = props;

    const pagesCount = itemsCount / pageSize;



}
    

    return (
        <nav>
            <ul className="Pagination">
                <li className="page-item"><a className="page-link">1</a>
                </li>
            </ul>
        </nav>
    )

 
export default Pagination;