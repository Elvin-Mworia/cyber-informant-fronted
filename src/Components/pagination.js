import React from 'react';
import "./styles/pagination.scss"
 
const Pagination=({postsPerPage,totalPost,paginate})=>{
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(totalPost/postsPerPage);i++ ){
        pageNumbers.push(i);

    }
    return(
        <nav className="pagination">
        <ul>
            {pageNumbers.map((number,key)=>{
                return(
                <li key={number} className="page-items">
                    <a onClick={()=>paginate(number)}href="/#" className="page-link">
                        {number}
                    </a>
                </li>
                )
            })}
        </ul>
        </nav>

    )
}
export default Pagination;