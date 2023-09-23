import React, { useState, useEffect } from 'react';

function App() {
  const [status, setStatus] = useState(null); // Initialize status as null
  const [urlInput, setUrlInput] = useState(''); // Initialize user input for URL

  const handleCheckButtonClick = () => {
    // Make the fetch request using the user-input URL
    fetch(`http://localhost:3001/proxy?url=${encodeURIComponent(urlInput)}`, { method: 'HEAD' })
      .then((response) => {
        console.log('Response status:', response.status);
        setStatus(response.status); // Update the status state with the response status
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setStatus('error'); // Set a custom status for fetch errors
      });
  };

  return (
    <div className='flex justify-between m-6'>
      
      <div>
        <input
          type="text"
          placeholder="Enter URL"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
        className='w-96 h-9 p-2 bg-gray-200'/>
        <button onClick={handleCheckButtonClick} className='ml-4 bg-black text-white p-1'>Check</button>
      </div>

      <div>
        {status === null? null : 
        status === 200 ? <div className='w-8 h-8 bg-green-500'></div> :
        <div className='w-8 h-8 bg-red-500'></div>}
      </div>

    </div>
  );
}

export default App;
