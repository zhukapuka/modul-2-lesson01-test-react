// src/components/App.tsx

import Product from "./Product";
import Button from "../components/Button global/Button";

export default function App() {
  return (
    <>
      <h1>Best selling</h1>

      <Product
        name="Tacos with lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
        price={10.99}
      />
      <Button variant="primary" text="Buy" />
      <Product
        name="Coconut milk"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
        price={14.29}
      />
      <Button variant="secondary" text="Buy" />
      <Product
        name="Icecream with chocolate"
        imgUrl="https://ix-marketing.imgix.net/autocompress.png?auto=format,compress&w=1946"
        price={8.99}
      />
      <Button variant="midle" text="Buy" />
    </>
  );
}
