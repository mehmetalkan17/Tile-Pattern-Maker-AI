import React, { useState } from 'react';
import './App.css';

function App() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleGenerate = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate image');
      }

      const data = await response.json();
      // For now, I'm assuming the backend returns a direct image URL.
      // This will need to be updated when the backend is fully implemented.
      setImageUrl(data.text);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>ÇiniAI</h1>
        <p>Describe the tile pattern you want to create:</p>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows="4"
          cols="50"
        />
        <button onClick={handleGenerate}>Generate</button>
        {imageUrl && <img src={imageUrl} alt="Generated tile pattern" />}
      </header>
    </div>
  );
}

export default App;
