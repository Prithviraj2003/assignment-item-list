import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Item from "./Item";

const ItemList = () => {
    // useSelector is a hook that is used to extract data from the Redux store state
  const items = useSelector((state) => state.items.allItems);
  const searchTerm = useSelector((state) => state.items.searchTerm);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter items based on the search term from the items name
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // set the currect page to 1 whenever the search term is changed to show the first page because the filtered items will be changed and if user is on the another page than the first and number filtered items are less tha n that pages limit it will show null (exapmle: if user is on page 2 and there are only 5 items and the limit is 6 then it will show null)
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="row">
        {currentItems.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            photo={item.photo}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>

      <nav>
        <ul className="pagination d-flex justify-content-center">
          {Array.from({ length: totalPages }).map((_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ItemList;
