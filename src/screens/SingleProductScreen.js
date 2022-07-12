import React from "react";

class SingleProductScreen extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Main">
        <h1>Product {this.props.productId}</h1>
        <a>Product {this.props.productId} is a magnificent piece of Artwork</a>
      </div>
    );
  }
}

export default SingleProductScreen;
