import React, { useState } from 'react';

const PostData = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Data to be sent to the API
    const data = { name, email, message };

    try {
      const response = await fetch('https://api.example.com/submit', {
        method: 'POST', // Specify the method
        headers: {
          'Content-Type': 'application/json', // Headers
        },
        body: JSON.stringify(data), // Convert data to JSON
      });

      // Check if the response is successful
      if (response.ok) {
        const result = await response.json();
        console.log('Data submitted successfully:', result);
        // Reset form or give feedback
      } else {
        console.error('Error submitting data:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostData;
