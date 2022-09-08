const HomeScreen = {
  render: () => {
    return `
    <div>
    <div class="hero">
      <button class="hero-button">View Products</button>
    </div>
    <div class="new-arrivals-text">
        <h2>v</h2>
        <h2>New Arrivals</h2>
      </div>
    <div class="new-arrivals">
      <div class="new-section">
        <div class="new-item">
          <h2 class="header-text">Asus Rog Monitor</h2>
          <p class="small-text"><a href="product-page.html">SHOW DETAILS&nbsp;&nbsp;></a></p>
          <div class="new-arrivals-image-container">
            <a href="product-page.html"><img class="new-arrivals-image" src="images/download.png" /></a>
          </div>
        </div>
        <div class="new-item">
          <h2 class="header-text">Samsung Pavillion Monitor</h2>
          <p class="small-text"><a href="product-page.html">SHOW DETAILS&nbsp;&nbsp;></a></p>
          <div class="new-arrivals-image-container">
            <img
              class="new-arrivals-image arrivals-image-02"
              src="images/samsung-02.png"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="review-section">
      <div class="review-container">
        <div class="review-card">
          <div class="user-dp" data-rating="4.9&#9733">
            <img src="images/user 1.png" alt="user 1 profile image" />
          </div>
          <h2 class="review-title">Easiest purchase i have made online</h2>
          <p class="review">
              The GearNg team represents among the highest levels of customer service I have experienced. Information was accurate, responses to queries were turned around very fast. Quality Product and Service!
          </p>
        </div>
        <div class="review-card">
          <div class="user-dp" data-rating="4.9&#9733">
            <img src="images/user 2.png" alt="user 2 profile image" />
          </div>
          <h2 class="review-title">Best quality, more than my expectation</h2>
          <p class="review">
              A fantastic organisation! Great cutomer support from beginning to end of the process. The team are really informed and go the extra mile at every stage. I would recommend them unreservedly.
          </p>
        </div>
        <div class="review-card">
          <div class="user-dp" data-rating="4.7&#9733">
            <img src="images/user 3.png" alt="user 3 profile image" />
          </div>
          <h2 class="review-title">He was very patient and honest</h2>
          <p class="review">
              I chatted with Mr Cruise. He was very helpful and answered all my questions concerning my monitor. I believe he had my interest at heart and found the best coverage for me at a good price.
          </p>
        </div>
      </div>
    </div>
    <div class="product-section">
      <div class="new-arrivals-text">
        <h2>Our Products</h2>
        <h2>v</h2>
      </div>
      <div class="new-section">
        <div class="new-item">
          <h2 class="header-text">Gaming Monitor</h2>
          <a href="/product"><p class="small-text">SHOW DETAILS&nbsp;&nbsp;></p></a>
          <div class="new-arrivals-image-container">
            <img class="new-arrivals-image" src="images/download.png" />
          </div>
        </div>
        <div class="new-item">
          <h2 class="header-text">Design Monitor</h2>
          <p class="small-text">SHOW DETAILS&nbsp;&nbsp;></p>
          <div class="new-arrivals-image-container">
            <img
              class="new-arrivals-image arrivals-image-02"
              src="images/samsung-02.png"
            />
          </div>
        </div>
      </div>
      <div class="new-section">
          <div class="new-item">
            <h2 class="header-text">Keyboards</h2>
            <p class="small-text">SHOW DETAILS&nbsp;&nbsp;></p>
            <div class="new-arrivals-image-container">
              <img
                class="new-arrivals-image" id="arrivals-image-03"
                src="images/mechanical.png"
              />
            </div>
          </div>
        <div class="new-item">
          <h2 class="header-text">Mouse</h2>
          <p class="small-text">SHOW DETAILS&nbsp;&nbsp;></p>
          <div class="new-arrivals-image-container">
            <img class="new-arrivals-image" id="arrivals-image-04" src="images/mouse.png" />
          </div>
        </div>
      </div>
    </div>
    
    </div>
        `;
  },
};
export default HomeScreen;
