import React from 'react';
import styles from '../styles/ProductCard.module.css';
import { Button, Card, CardContent, CardMedia } from '@mui/material/';

const ProductCard = ({ product, onRemove }) => {
  const { id, name, price, inStock, image } = product;
  const outOfStockClasses = `${styles.outOfStockClass} outOfStockClass`;
  return (
    <Card variant="outlined" sx={{ maxWidth: 900 }}>
      <div className={!inStock ? outOfStockClasses : ""}>
        {image && <img src={image} alt={`${name} image`} />}
        <h3>{name}</h3>
        <p>{price}</p>
        <p>{inStock ? "In Stock" : "Out of Stock"}</p>
      </div>
      <Button variant="outlined" color="error" onClick={() => onRemove(id)}>
        Remove item
      </Button>
    </Card>
  );
};

export default ProductCard;
