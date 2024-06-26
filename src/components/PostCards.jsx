import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removePost } from '../features/posts/postsSlice';
import { ClipLoader } from 'react-spinners'; // Import the spinner

const PostCards = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.posts);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewToggle, setViewToggle] = useState(false);

  const postsPerPage = 6;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handleRemove = (postId) => {
    dispatch(removePost(postId));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(posts.length / postsPerPage);

  if (loading) {
    return (
      <div className='loader-container'>
        <ClipLoader size={50} />
      </div>
    );
  }

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`pagination-button ${currentPage === i ? 'active' : ''}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    return (
      <div className='pagination'>
        {currentPage > 1 && (
          <button
            className='btn btn-dark'
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
        )}
        {pageNumbers.slice(currentPage - 1, currentPage + 4)}
        {currentPage !== totalPages && (
          <button
            className='btn btn-dark'
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        )}
      </div>
    );
  };

  return (
    <div>
      {/* <button onClick={() => setViewToggle(!viewToggle)}>Toggle View</button> */}
      <div
        className={`card-container ${viewToggle ? 'list-view' : 'grid-view'}`}
      >
        <div className='container'>
          <div className='row'>
            {currentPosts.map((post) => (
              <div
                key={post.id}
                className='col-12 col-sm-6 col-md-4 col-lg-12 mb-4'
              >
                <div className='card'>
                  <div className='card-body'>
                    <h5 className='card-title'>{post.title}</h5>
                    <p className='card-text'>{post.body}</p>
                    <button
                      className='btn btn-danger float-end'
                      onClick={() => handleRemove(post.id)}
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {renderPagination()}
    </div>
  );
};

export default PostCards;
