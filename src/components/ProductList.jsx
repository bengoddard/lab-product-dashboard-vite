import React, {useState} from 'react';
import ProductCard from './ProductCard';
import styles from '../styles/ProductList.module.css';

const ProductList = ({ products: initialProducts }) => {
  const [products, setProducts] = useState(initialProducts);

  const handleRemove = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };
  // TODO: Check if the product list is empty and display a message if needed
  return (
    <div className={styles.wrapper}>
      <header id="header" className={styles.header}>
        <h1>Product Dashboard</h1>
      </header>

      <main id="product-list" className={styles.list}>
        {products.length === 0 ? (
          <p className={styles.empty}>No products available.</p>
        ) : (
          products.map((p) => <ProductCard key={p.id} product={p} onRemove={handleRemove}/>)
        )}
      </main>
    </div>
  );
};

export default ProductList;
