import data from "../data.js";

const ProductScreen = {
  render: () => {
    const { products } = data;
    return `
    <div class="new-arrivals">
    <div class="new-section" id="new-arrivals-product">
      <div class="new-item new-item-product">
        <h2 class="header-text">Asus Rog Monitor</h2>
        <p class="small-text">SHOW DETAILS&nbsp;&nbsp;></p>
        <div class="new-arrivals-image-container">
          <img class="new-arrivals-image" src="${products.image}" />
        </div>
      </div>
      <div>
        <ul class="product-specs">
          <li>Screen Size - 27 Inches</li>
          <li>Display Resolution - 2560 x 1440 Pixels</li>
          <li>Brand - ASUS</li>
          <li>Refresh Rate - 240 Hz</li>
          <li>
            Special Features - Height Adjustment, Swivel Adjustment, Tilt
            Adjustment
          </li>
        </ul>
      </div>
      <div class="cart-overview-container" style='background-color:transparent;'>
          
          <div class="cart-buttons-container">
            <button class="buy-now-btn">BUY NOW</button>
            <button class="buy-now-btn"> <a href="/#/cart">Add to Cart</a></button>
          </div>
        </div>
    </div>
  </div>
        `;
  },
};
export default ProductScreen;
