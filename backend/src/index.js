import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// Placeholder block data - In production, this would come from mempool API
// Sample Bitcoin blocks with realistic hashes and timestamps
const PLACEHOLDER_BLOCKS = [
  { 
    height: 800000, 
    hash: '00000000000000000002a7c4c1e48d76c5a37902165a270156b7a8d72728a054', 
    timestamp: 1687654321  // June 25, 2023
  },
  { 
    height: 799999, 
    hash: '00000000000000000003b2f4d1f58e86d6b48a13275b381267c8b9e83838b165', 
    timestamp: 1687654020  // June 25, 2023
  }
];

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' });
});

// Example endpoint for block explorer
app.get('/api/blocks', (req, res) => {
  // This is a placeholder - in a real app, this would fetch from mempool API
  res.json({ blocks: PLACEHOLDER_BLOCKS });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
