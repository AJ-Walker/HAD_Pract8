import React, { useEffect, useState } from "react";

const MagicShopUseEffect = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      ).then(response => response.json());
      alert(JSON.stringify(data));

      setProducts(data);
    };

    fetchData();
  }, []);

  const handleChange = event => setProducts(['prod1']);

  return (
    <main>
      <h1>Laramie's Magical Emporium</h1>
      <section>
        <h2>Goods for Sale</h2>

        <label htmlFor="product-search-query">Search</label>
        <input
          id="product-search-query"
          onChange={handleChange}
          value='hello'
        />

        {products.map(product => (
          <article key={product.id}>
            <h3>{product.name}</h3>
            Price: {product.id} € <br />
            {product.id} in stock
          </article>
        ))}
      </section>
    </main>
  );
};

export default MagicShopUseEffect;