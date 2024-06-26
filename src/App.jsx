import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from './features/posts/postsSlice';
import PostCards from './components/PostCards';
import FeedbackForm from './components/FeedbackForm';

const App = () => {
  const dispatch = useDispatch();
  const [showPosts, setShowPosts] = useState(true);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <div>
        <div className='row g-0  gap-5'>
          <div className='col-lg-3'>
            <div className='card side-card-contain'>
              <div className='card-container'>
                <div className='profile-card'>
                  <img
                    width={'40px'}
                    height={'40px'}
                    style={{ borderRadius: '50%' }}
                    src='../src/assets/img/reader.jpeg'
                    alt='reader'
                  />
                  <span>
                    <h5 className='mb-0'>Hi Reader</h5>
                    <p className='mb-0'>Here's your news</p>
                  </span>
                </div>
              </div>
              <div className='feedback-card'>
                <div className='feedback-post-btn'>
                  <button
                    className='toggle-btn btn'
                    onClick={() => setShowPosts(!showPosts)}
                  >
                    {showPosts ? 'We are Listening' : 'Show Posts'}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-8'>
            {showPosts ? <PostCards /> : <FeedbackForm />}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
