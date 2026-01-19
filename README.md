# block-explorer

A simple web block-explorer that consumes mempool's API

## Monorepo Structure

This project is organized as a monorepo with the following workspaces:

```
block-explorer/
├── frontend/              # React frontend (Vite)
├── backend/               # Express backend API
├── package.json           # Root workspace configuration
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher for workspace support)

### Installation

Install all dependencies for both frontend and backend:

```bash
npm install
```

This will install dependencies for the root workspace and all packages.

### Development

Run both frontend and backend in development mode:

```bash
npm run dev
```

Or run them separately:

```bash
# Backend only (http://localhost:3001)
npm run dev:backend

# Frontend only (http://localhost:3000)
npm run dev:frontend
```

### Building

Build both packages for production:

```bash
npm run build
```

Or build separately:

```bash
npm run build:backend
npm run build:frontend
```

### Production

Start both applications in production mode:

```bash
npm start
```

## Packages

### Frontend (`frontend`)

- **Framework**: React 18
- **Build Tool**: Vite
- **Port**: 3000
- **Features**: 
  - Block explorer UI
  - API integration with backend
  - Responsive design

See [frontend/README.md](frontend/README.md) for more details.

### Backend (`backend`)

- **Framework**: Express
- **Port**: 3001
- **Features**:
  - RESTful API
  - CORS enabled
  - Health check endpoint
  - Block data endpoints (placeholder for mempool API integration)

See [backend/README.md](backend/README.md) for more details.

## API Endpoints

- `GET /api/health` - Health check
- `GET /api/blocks` - Get block information

## Scripts

All scripts can be run from the root directory:

| Command | Description |
|---------|-------------|
| `npm run dev` | Start both frontend and backend in dev mode |
| `npm run dev:frontend` | Start only frontend in dev mode |
| `npm run dev:backend` | Start only backend in dev mode |
| `npm run build` | Build both packages |
| `npm run build:frontend` | Build only frontend |
| `npm run build:backend` | Build only backend |
| `npm start` | Start both in production mode |

## License

ISC
