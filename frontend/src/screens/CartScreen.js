import data from "../data.js";
const CartScreen = {
  render: () => {
    const { products } = data;
    return `
    <div class="cart-page">
      <div class="new-arrivals-text">
        <h2>Your Cart</h2>
      </div>
    <ul >
    ${products
      .map(
        (product) => `
    <li>
      <div class="cart-container">
        <div class="cart-item-container">
          <div class="cart-item">
            <div class="cart-item-name">${product.name}</div>
            <div class="cart-item-price"><h5>N200,000</h5></div>
          </div>
        </div>
        
      </div>
    </div>
    </li>
    
    `
      )
      .join("\n")}
    </ul>
    <div class="cart-overview-container">
          <div class="cart-total-price">total: 1,200,000</div>
          <div class="cart-buttons-container">
            <button class="buy-now-btn">BUY NOW</button>
            <button class="buy-now-btn">Continue Shopping</button>
          </div>
        </div>
    `;
  },
};
export default CartScreen;
