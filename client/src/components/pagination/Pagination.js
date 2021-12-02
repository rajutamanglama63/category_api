import "./pagination.css"

const Pagination = ({paginate, categoryPerpage, totalCategories}) => {
    const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCategories / categoryPerpage); i++) {
    pageNumbers.push(i);
  }
    return (
        <div>
             <nav>
                <ul className='pagination'>
                    {pageNumbers.map(number => (
                        <li key={number} className='page_item'>
                            <a onClick={() => paginate(number)} href='#' className='page_link'>
                            {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
