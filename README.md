# Plan Your Day

Plan Your Day is a task management web application currently under development. It allows users to plan their daily tasks and organize them by date.

## Current Status

The project currently includes a functional frontend with the following features:

- Create tasks with a title, description, and date.
- Set task importance and urgency levels.
- Automatically organize tasks into the **Today**, **Missed from Past**, and **Future** groups.
- Responsive interface built with React, Material UI, and Tailwind CSS.
- Initial navigation with the "My Day" and "Calendar" views.

Tasks are currently stored only in the application's state and are lost when the page is reloaded. The `Backend/` directory is reserved for future development.

## Technologies

- React 19 and TypeScript
- Vite
- Material UI and MUI X Date Pickers
- Tailwind CSS
- Day.js
- React Router

## Prerequisites

- Node.js 20 or later
- npm

## Installation

From the repository root directory:

```bash
cd Frontend
npm install
```

## Development

To start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at the URL provided by Vite, usually `http://localhost:5173`.

## Available Scripts

Run these commands from the `Frontend/` directory:

```bash
npm run dev      # Starts the development server
npm run build    # Checks TypeScript and generates the production build
npm run lint     # Runs ESLint
npm run preview  # Previews the production build
```

## Project Structure

```text
PlanYourDay/
├── Backend/                 # Reserved for the API and data persistence
├── Frontend/
│   ├── public/              # Public assets, including the logo
│   ├── src/
│   │   ├── components/      # App bar, modal, and task groups
│   │   ├── App.tsx           # Main application component
│   │   └── routes.tsx        # Frontend routes
│   ├── package.json
│   └── vite.config.ts
└── README.md
```

## Planned Features

- Develop a backend API and integrate a database.
- Persist tasks across sessions.
- Implement the Calendar and Profile views.
- Add task editing, deletion, and completion features.
- Implement user authentication.
- Expand automated test coverage.