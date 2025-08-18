import { Fragment } from 'react/jsx-runtime';
import style from './App.module.css';
import { ProductList } from './components/ProductList';
import { ProductCard } from './components/ProductCard';
 

function App() { 
  const  products = [
  {
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

function handlePurchase(product) {
  alert(`Hire ${product.title} with $${product.price} per 4hours`);
}

  return (
    <div className={style.App}>
      <ProductList>
        {products.map((product => 
          <ProductCard 
            product={product} 
            onPurchase={handlePurchase}
            key={product.title}
          /> 
        ))}
      </ProductList>

      <h2>Product which cost $500</h2>
        {products
         .filter(({ price })=> price < 500)
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