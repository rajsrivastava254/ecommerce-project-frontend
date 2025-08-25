# E-Commerce React Frontend

A simple and modern e-commerce frontend built with React, React Router, and React Context API. This project allows users to browse products, view product details, add items to a cart, and more.

## Features

- Product listing with search functionality
- Product detail pages
- Shopping cart with add/remove functionality
- Persistent cart using localStorage
- Responsive and modern UI
- Toast notifications for user actions

## Getting Started

### Prerequisites

- Node.js (v14 or above recommended)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/rajsrivastava254/ecommerce-project-frontend
   cd ecommerce-project-frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Running the App

Start the development server:

```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Building for Production

To build the app for production:

```sh
npm run build
```

The optimized build will be in the `build/` directory.

## Project Structure

```
src/
  components/      # Reusable UI components
  context/         # React Context for global state (cart)
  pages/           # Page components (Home, Products, Cart, About, ProductDetails)
  App.js           # Main app component
  index.js         # Entry point
public/
  images/          # Static images
  index.html       # HTML template
```

## API

This frontend expects a backend API running at `http://localhost:8080` with endpoints like:

- `GET /api/products` — List all products
- `GET /api/products/:id` — Get product details by ID
- `GET /images/:imageName` — Serve product images

## License

This project is licensed under the MIT License.

---

Made with ❤️ using [React](https://reactjs.org/)
