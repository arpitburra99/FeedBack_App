import React, { useState } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    country: '',
    phoneNumber: null,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.lastName &&
      formData.lastName &&
      formData.address &&
      formData.email &&
      formData.country &&
      formData.phoneNumber
    ) {
      console.log('Feedback submitted:', formData);
      setFormData({
        firstName: '',
        lastName: '',
        addressd: '',
        email: '',
        country: '',
        phoneNumber: null,
      });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <div className='mx-5 mt-5'>
      <h2>Thank you so much for taking the time!</h2>
      <p>Please provie the below details!</p>
      <div>
        {submitted ? <div>Thank you for your feedback!</div> : null}

        <form onSubmit={handleSubmit}>
          <div className='mt-2'>
            <label>First Name:</label>
            <input
              type='text'
              className='form-control w-75'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mt-2'>
            <label>Last Name:</label>
            <input
              type='text'
              className='form-control w-75'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mt-2'>
            <label>Address:</label>
            <textarea
              name='address'
              className='form-control w-75'
              value={formData.address}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className='mt-2'>
            <label>Country:</label>
            <input
              type='text'
              className='form-control w-75'
              name='country'
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mt-2'>
            <label>Email:</label>
            <input
              type='email'
              className='form-control w-75'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mt-2'>
            <label>Phone Number:</label>
            <input
              type='number'
              className='form-control w-75'
              name='phoneNumber'
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <button className='btn btn-primary mt-3' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
