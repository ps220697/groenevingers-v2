import React from 'react';

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage }) => {
  const pages = [];
  
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className='flex justify-between p-4 mb-4'>
      {pages.map((page, index) => {
        return <button key={index} onClick={() => setCurrentPage(page)}>{page}</button>;
      })}
    </div>
  );
};

export default Pagination;