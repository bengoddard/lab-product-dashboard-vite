import React from 'react';
import ProductList from './components/ProductList';
import { Button } from '@mui/material';

function App() {
  // TODO: Define initial product data
const initialProducts = [
  { id: 1, name: 'Laptop', price: '$375', inStock: true, image: "/laptop.avif"},
  { id: 2, name: 'Phone', price: '$850', inStock: false, image: "/phone.jpeg"},
  { id: 3, name: 'Tablet', price: '$200', inStock: true, image: "/tablet.webp"},
];
  // TODO: Implement state to manage filtering

  // TODO: Implement logic to filter products based on availability
  return (
    <div>
      
      {/* TODO: Add buttons to allow filtering by availability */}

      {/* TODO: Render the ProductList component and pass filtered products */}
      <ProductList products={initialProducts} />
    </div>
  );
};

export default App;
