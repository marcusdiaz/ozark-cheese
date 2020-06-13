import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
  render() {
    const { products, addVariantToCart, client } = this.props;
    if (products) {
      const productComponents = products.map((product) => {
        return (
          <Product
            addVariantToCart={addVariantToCart}
            client={client}
            key={product.id.toString()}
            product={product}
          />
        );
      });

      return <div className="Product-wrapper">{productComponents}</div>;
    }
    return <div className="Product-wrapper">No products found!</div>;
  }
}

export default Products;
