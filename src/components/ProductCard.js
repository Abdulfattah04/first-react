export function ProductCard() {
    const  product = {
        imageSrc: 'images/iphone.png',
        title: 'FruityLife',
        specification: [
            'Electronic Technician',
            'Decoder Installation',
            'Web Developer',
            'Teacher'
        ],
        price: 500
    };

  return (
    <article 
      style={{ 
        border: '1px solid white', 
        borderRadius: '8px', 
        padding: '16px', 
        textAlign: 'center'
      }}
    >
      <h2>{product.title}</h2>
      <img 
        src={product.imageSrc}  
        width='128px' 
        height='128px' 
        alt={product.title}
      />
      <p>Expertise</p>
      <ul style={{listStyle: "none", padding: 0}}>
        <li>{product.specification[0]}</li>
        <li>{product.specification[1]}</li>
        <li>{product.specification[2]}</li>
        <li>{product.specification[3]}</li>
      </ul>
      <button>Pay ${product.price}</button>
    </article>
  );
}