// src/components/Product.tsx
import "../App.css";
interface ProductProps {
  name: string;
  imgUrl: string;
  price: number;
}
export default function Product({ name, imgUrl, price }: ProductProps) {
  return (
    <div>
      <h2 className="product-name">{name}</h2>
      <img src={imgUrl} alt={name} width="320" />
      <p className="product-price">Price: {price} credits</p>
    </div>
  );
}
