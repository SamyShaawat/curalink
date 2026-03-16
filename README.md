# CuraLink Dashboard

Welcome to the CuraLink Dashboard project! This is a modern, responsive React application built to provide a clean and intuitive interface for a healthcare network management system.

**🌐 Live Demo:** [https://samyshaawat.github.io/curalink/](https://samyshaawat.github.io/curalink/)

## 🚀 Features

- Modern React 19 with TypeScript
- Responsive dashboard design
- Hospital network management
- Studies and patient data visualization
- Interactive charts with Recharts
- Tailwind CSS v4 styling
- React Router for navigation

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 19 + TypeScript |
| **Build Tool** | Vite + Nx |
| **Styling** | Tailwind CSS v4 |
| **Routing** | React Router v6 |
| **Charts** | Recharts |
| **Package Manager** | pnpm |
| **Deployment** | GitHub Pages |

## Getting Started Locally

Follow these instructions to run the application on your local machine.

### Prerequisites

*   **Node.js** (v18 or higher recommended)
*   **pnpm** (Package manager used for this project)

If you don't have `pnpm` installed, you can install it globally via npm:
```bash
npm install -g pnpm
```

### 1. Installation

Clone the repository and install the project dependencies:

```bash
# Navigate to the project root directory
cd curalink

# Install all workspace dependencies
pnpm install
```

### 2. Running the Development Server

Start the local development server using the Nx CLI:

```bash
pnpm nx serve curalink
```
*Alternatively, if you have Nx installed globally, you can just run `nx serve curalink`.*

The application will compile and become available at **`http://localhost:4200`**.

### 3. Building for Production

To create an optimized production build, run:

```bash
pnpm nx build curalink
```

The resulting artifacts will be placed in the `dist/curalink/` directory, ready to be deployed.

## 📁 Project Structure

```
curalink/
├── src/
│   ├── app/              # Main application component
│   ├── components/       # Shared UI components
│   ├── features/         # Feature-specific components
│   │   ├── hospital/     # Hospital dashboard components
│   │   ├── network/      # Network dashboard components
│   │   └── studies/      # Studies page components
│   ├── pages/            # Page components
│   ├── enums/            # Constants and enums
│   └── styles.css        # Global styles
├── public/               # Static assets
├── .github/workflows/    # CI/CD workflows
└── dist/                 # Production build output
```

## 🚢 Deployment

This project is automatically deployed to GitHub Pages on every push to the `main` branch via GitHub Actions.

## 📄 License

MIT