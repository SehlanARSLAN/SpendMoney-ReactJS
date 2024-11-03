import React from "react";
import { buyProduct, sellProduct } from "../redux/ProductSlice";
import { useSelector, useDispatch } from "react-redux";

function ProductList() {
  const dispatch = useDispatch();
  const { balance, products } = useSelector((state) => state.products);
  return (
    <div>
      <h1>Spend Bill Gates' Money</h1>
      <h2>${balance.toLocaleString()}</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.name}</h3>
            <h4>${product.price.toLocaleString()}</h4>
            <button
              onClick={() => dispatch(sellProduct(product.id))}
              disabled={product.quantity === 0}
            >
              Sell
            </button>
            <input type="number" value={product.quantity} readOnly />
            <button
              onClick={()=>dispatch(buyProduct(product.id))}
              disabled={balance < product.price}
            >
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
