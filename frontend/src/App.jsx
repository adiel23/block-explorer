import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [blocks, setBlocks] = useState([]);
  const [health, setHealth] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch health status
    fetch('/api/health')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => setHealth(data))
      .catch(err => console.error('Health check failed:', err));

    // Fetch blocks
    fetch('/api/blocks')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        setBlocks(data.blocks);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch blocks:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Block Explorer</h1>
        {health && (
          <p className="health-status">
            Backend Status: {health.status === 'ok' ? '✅' : '❌'} {health.message}
          </p>
        )}
      </header>
      
      <main className="App-main">
        <h2>Recent Blocks</h2>
        {loading ? (
          <p>Loading blocks...</p>
        ) : blocks.length > 0 ? (
          <div className="blocks-container">
            {blocks.map((block) => (
              <div key={block.height} className="block-card">
                <div className="block-height">Block #{block.height}</div>
                <div className="block-hash">Hash: {block.hash}</div>
                <div className="block-time">
                  Time: {new Date(block.timestamp * 1000).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No blocks found</p>
        )}
      </main>
    </div>
  )
}

export default App
