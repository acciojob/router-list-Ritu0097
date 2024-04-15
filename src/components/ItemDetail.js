import React from 'react';
import { useParams } from 'react-router-dom';

function ItemDetail() {
  const { itemId } = useParams();
  const items = {
    1: { name: 'Item 1', description: 'Description of Item 1' },
    2: { name: 'Item 2', description: 'Description of Item 2' },
  };
  const item = items[itemId];
  if (!item) return <div>Item not found</div>;
  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
    </div>
  );
}

export default ItemDetail;
