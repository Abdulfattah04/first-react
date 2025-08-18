import style from "./ProductCard.module.css"

export function ProductCard({ 
  product, 
  background = "slategray", 
  onPurchase,
}) {

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
      <p>Expertise</p>
      <ul className={style.Specification}>
        {product.specification.map((spec, index) => (
          <li key={index}>{spec}</li>
        ))}
      </ul>
      <Status stockCount={product.stockCount} />
      { product.stockCount > 0 && (
        <button onClick={() => onPurchase(product)}>
        Pay ${product.price}
        </button>
      )}
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