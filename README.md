# TaskApp

A modern task management application built with React, TypeScript, and Vite, featuring a beautiful UI powered by shadcn/ui components.

## 🚀 Features

- Modern React with TypeScript for type safety
- Fast development with Vite
- Beautiful UI components using shadcn/ui
- SCSS modules for styling

## 🛠️ Tech Stack

- [React](https://reactjs.org/) - UI Library
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Vite](https://vitejs.dev/) - Build Tool
- [shadcn/ui](https://ui.shadcn.com/) - UI Components
- [SCSS Modules](https://sass-lang.com/) - Styling
- [Lucide Icons](https://lucide.dev/) - Icon Library

## 📦 Installation

> **Note:** This project uses [pnpm](https://pnpm.io/installation) as the package manager. If you don't have it installed, follow the instructions [here](https://pnpm.io/installation).

1. Clone the repository:

```bash
git clone https://github.com/yourusername/taskapp.git
cd taskapp
```

2. Install dependencies:

```bash
pnpm i
```

3. Start the development server:

```bash
pnpm dev
```

## 📝 Code Style

The project uses ESLint for code quality and consistency. Configuration includes:

- TypeScript-aware linting
- React-specific rules
- Strict type checking
- Stylistic rules

## 🏗️ Project Structure

```
src/
├── assets/         # Static assets like images, fonts, etc.
├── components/     # Reusable UI components
│   ├── button/     # Custom button component
│   ├── formItem/   # Custom formItem component
│   ├── modal/      # Custom modal components
│   ├── select/     # Custom select components
│   ├── table/      # Custom table components
│   └── ui/         # shadcn/ui components
├── context/        # React Context providers
├── data/           # Mock data and constants
├── hooks/          # Custom React hooks
├── lib/            # Third-party library configurations
├── pages/          # Page components and routing
│   └── Submittals/ # Submittals feature pages
├── services/       # API and business logic services
│   └── item.ts     # Item-related API services
├── styles/         # Global styles and themes
├── types/          # TypeScript type definitions
├── utils/          # Utility functions and helpers
├── App.tsx         # Root application component
├── main.tsx        # Application entry point
└── routes.tsx      # Application routing configuration
```

### Directory Explanations

#### 📁 components/

Reusable UI components that can be used across different pages:

- `button/`: Custom button component with variants
- `formItem/`: Custom formItem component for Forms to add Label and inputs
- `modal/`: Custom modal component to display information
- `select/`: Custom select component for forms
- `table/`: Table-related components
- `ui/`: shadcn/ui components and their configurations

#### 📁 pages/

Page-level components that represent different routes in the application:

- `Submittals/`: Pages related to the submittals feature

#### 📁 services/

API integration and business logic:

- `item.ts`: Handles item-related API calls and business logic

#### 📁 context/

React Context providers for global state management:

- Contains context providers for sharing state across components

#### 📁 hooks/

Custom React hooks for reusable logic:

- Custom hooks for common functionality

#### 📁 lib/

Third-party library configurations and utilities:

- Configuration files for external libraries

#### 📁 types/

TypeScript type definitions:

- Shared interfaces and types

#### 📁 utils/

Utility functions and helpers:

- Common helper functions used across the application

#### 📁 styles/

Global styles and theme configurations:

- Global CSS, SCSS variables, and theme settings

#### 📁 data/

Mock data and constants:

- Sample data and constant values

#### 📁 assets/

Static assets:

- Images, fonts, and other static files

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Vite](https://vitejs.dev/) for the blazing fast build tool
- [React](https://reactjs.org/) for the amazing UI library
