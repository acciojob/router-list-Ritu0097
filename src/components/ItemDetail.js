import React from 'react';
import { useParams } from 'react-router-dom';

function ItemDetail() {
  const items = {
    1: { name: 'Item 1', description: 'Description of Item 1' },
    2: { name: 'Item 2', description: 'Description of Item 2' },
    3: { name: 'Item 3', description: 'Description of Item 3'},
  };
  return (
    <div>
      <h1>{items.name}</h1>
      <p>{items.description}</p>
    </div>
  );
}

export default ItemDetail;
