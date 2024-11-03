import React from 'react'
import {useSelector} from 'react-redux'
import { selectProductsWithQuantity } from '../redux/Selectors';

function Receipt() {
    const products = useSelector(selectProductsWithQuantity);

    const totalSpend = products.reduce(
        (total, product)=> total + product.price * product.quantity, 0
    );

  return (
    <div>
      <h1>Your Receipt</h1>
      {products.map((product)=>(
        <div key={product.id}>
          <h3>{product.name} x {product.quantity} - ${(product.price * product.quantity).toLocaleString()}</h3>
        </div>
      ))}
      <div>Total: ${totalSpend.toLocaleString()}</div>
    </div>
  )
}

export default Receipt
