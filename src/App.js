import { useState } from 'react';
import { Fragment } from 'react/jsx-runtime';
import style from './App.module.css';
import { ProductFilter } from './components/ProductFilter';
import { ProductList } from './components/ProductList';
import { ProductCard } from './components/ProductCard';
 

function App() { 
  const  products = [
  {
    id: 1,
    imageSrc: 'images/iphone.png',
    title: 'FruityLife',
    specification: [
      'Electronic Technician',
      'Decoder Installation',
      'Web Developer',
      'Teacher'
    ],
    stockCount: 10,
    price: 500
  },
  {
    id: 2,
    imageSrc: 'images/wrist-watch.png',
    title: 'Abuhafs',
    specification: [
      'Decoder Installation',
      'Electronic Technician',
      'Teacher',
      'Web Developer'
    ],
    stockCount: 0,
    price: 400
  },
  {
    id: 3,
    imageSrc: 'images/clothes.png',
    title: 'At-tahqeeq',
    specification: [
      'Teacher',
      'Electronic Technician',
      'Web Developer',
      'Decoder Installation'
    ],
    stockCount: 6,
    price: 300
  },
];
const [filters, setFilters] = useState({
  price: {
    min: 0,
    max: 999,
  },
  other: "other value"
});
const [favorites, setFavorites] = useState([])

function handlePurchase(product) {
  alert(`Hire ${product.title} with $${product.price} per 4hours`);
}

function handleFilter(key, value) {
  setFilters((prevFilter) => ({
    ...prevFilter,
    price: {
      ...prevFilter.price,
      [key]: value,
    },
  }));
}

function handleFavorite(productId) {
  if (favorites.includes(productId)) {
    setFavorites((prevFavorite) => 
      prevFavorite.filter(id => id !== productId)
    );
  } else {
    setFavorites((prevFavorite) => [...prevFavorite, productId]);
  }
}

  return (
    <div className={style.App}>
      <ProductList>
        {products.map((product => 
          <ProductCard
            key={product.title} 
            product={product} 
            isFavorite={favorites.includes(product.id)}
            onPurchase={handlePurchase}
            onFavorite={handleFavorite}
          /> 
        ))}
      </ProductList>

      <h2>Products filtered by price</h2>
      <ProductFilter filters={filters} onFilter={handleFilter}/>
        {products
         .filter(({ price })=> price >= filters.price.min && price <= filters.price.max)
         .map(({title, price})=> (
         <Fragment key={title}>
           <hr className={style.ListDivider}/>
           <p className={style.ListTitle}>
            {title} cost ${price}
           </p>
         </Fragment>
        ))}
    </div>
  );
}

export default App;