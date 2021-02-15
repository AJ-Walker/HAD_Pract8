import React, { useState } from "react";

const MagicShop = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Haunted Mirror", inventory: 1, price: 5.00 },
    {
      id: 2,
      name: "Mastering Magic: Madame Maude's Meanderings",
      inventory: 372,
      price: 17.50
    },
    { id: 3, name: "Black Cat Shampoo", inventory: 127, price: 2.75 }
  ]);

  const updateInventory = id => {
    setProducts(
      products.map(product =>
        product.id === id
          ? { ...product, inventory: (product.inventory - 1) }
          : product
      )
    );
  };

  return (
    <main>
      <h1>Laramie's Magical Emporium</h1>

      <section>
        <h2>Goods for Sale</h2>
        {products.map(product => (
          <article key={product.id}>
            <h3>{product.name}</h3>
            Price: {product.price} € <br />
            {product.inventory} in stock <br />
            <button onClick={() => updateInventory(product.id)}>Buy</button>
          </article>
        ))}
      </section>
    </main>
  );
};

export default MagicShop;