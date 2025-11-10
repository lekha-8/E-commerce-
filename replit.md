# ShopHub - Modern E-Commerce Platform

## Overview

ShopHub is a modern e-commerce platform built with React and Express, featuring a curated product catalog with electronics, fashion, and home decor categories. The application provides a complete shopping experience with product browsing, search, filtering, cart management, and checkout functionality. The design draws inspiration from successful e-commerce platforms like Shopify and Etsy, prioritizing both visual appeal and conversion optimization.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework and Build System**
- React 18+ with TypeScript for type safety and developer experience
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing (homepage, product detail, checkout, 404)

**State Management**
- React Context API for cart state management (CartContext)
- TanStack Query (React Query) for server state management and API data fetching
- localStorage for cart persistence across sessions

**UI Component Strategy**
- shadcn/ui component library with Radix UI primitives for accessible, unstyled components
- Tailwind CSS for utility-first styling with custom design tokens
- Custom CSS variables for theming (light mode defined, dark mode ready)
- Typography system using Inter font family with defined weight and size scales

**Key Design Decisions**
- Responsive-first design with mobile (1 col), tablet (2 col), and desktop (4 col) grid layouts
- Component composition pattern with reusable ProductCard, ProductGrid, Header, and Footer components
- Client-side search and filtering to reduce server requests and improve perceived performance
- Image lazy loading for performance optimization

### Backend Architecture

**Server Framework**
- Express.js as the HTTP server framework
- ESM (ES Modules) throughout the codebase for modern JavaScript support
- Custom middleware for request logging and JSON parsing with raw body capture

**API Design**
- RESTful API endpoints under `/api` prefix
- Product endpoints: GET all products, GET by ID, GET by category, search
- No authentication currently implemented (MVP scope)
- JSON response format for all API endpoints

**Data Layer**
- In-memory storage implementation for MVP (no database connection required initially)
- Mock product data with pre-generated images from attached_assets
- Storage interface pattern for easy migration to database later

**Development vs Production**
- Vite middleware integration in development for HMR and asset serving
- Static file serving in production from compiled dist/public directory
- Conditional Replit-specific plugins only loaded in development environment

### External Dependencies

**Database (Configured but Not Active)**
- Drizzle ORM configured for PostgreSQL via @neondatabase/serverless
- Schema defined in shared/schema.ts with products table structure
- Database migrations configured but not required for current in-memory implementation
- Environment variable DATABASE_URL required when database is provisioned

**Third-Party UI Libraries**
- Radix UI component primitives (@radix-ui/*) for accessible, unstyled UI components
- embla-carousel-react for image galleries and hero carousels
- cmdk for command palette functionality
- lucide-react for icon library
- class-variance-authority and clsx for dynamic className management
- tailwind-merge for Tailwind class deduplication

**Development Tools**
- TypeScript for type checking across client, server, and shared code
- tsx for running TypeScript files in Node.js during development
- esbuild for production server bundling
- PostCSS with Tailwind CSS and Autoprefixer for CSS processing
- Replit-specific plugins for development experience (@replit/vite-plugin-*)

**Form and Validation**
- React Hook Form (@hookform/resolvers) for form state management
- Zod for schema validation via drizzle-zod integration
- Type-safe forms with TypeScript inference

**Date Handling**
- date-fns library for date formatting and manipulation

**Session Management (Configured)**
- connect-pg-simple for PostgreSQL session storage (when database is active)
- Currently using localStorage for cart persistence as sessions not required for MVP