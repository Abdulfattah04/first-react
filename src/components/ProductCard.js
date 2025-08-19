import { useState } from "react"; 
import style from "./ProductCard.module.css"

export function ProductCard({ 
  product, 
  background = "slategray", 
  onPurchase,
}) {
  const [stockCount, setStockCount] = useState(product.stockCount)
  const [showMore, setShowMore] = useState(false)

  function handleClick() {
    setStockCount((prevStockCount)=> prevStockCount - 1)
    onPurchase(product)
  }

  function handleTwoClicks() {
    setStockCount((prevStockCount)=> prevStockCount - 1)
    setStockCount((prevStockCount)=> prevStockCount - 1)
  }


  return (
    <article 
      style={{background}}
      className={style.Container}
    >
      <h2>{product.title}</h2>
      <img 
        src={product.imageSrc} 
        alt={product.title}
        width={128}
        height={128}
      />
      <p>Expertise: {' '}
        <button onClick={()=> setShowMore(!showMore)}>{showMore ? "hide" : "show"}</button>
      </p>
      {showMore && <ul className={style.Specification}>
        {product.specification.map((spec, index) => (
          <li key={index}>{spec}</li>
        ))}
      </ul>}
      <Status stockCount={stockCount} />
      { stockCount > 0 && (
        <>
          <p>Price: ${product.price}</p>
          <button onClick={handleClick}>
          Pay
          </button>
        </>
      )}
      {stockCount > 1 && <button onClick={handleTwoClicks}>Pay 2</button>}
    </article>
  );
}

function Status({ stockCount }) {
  const notAvailableTemplate = (
    <p className={style.NotAvailableStatus}>
      Not available
    </p>
  );

  const availableTemplate = (
    <p className={style.AvailableStatus}>
      {stockCount} items available
    </p>
  );

  return stockCount === 0 ? notAvailableTemplate : availableTemplate;
}