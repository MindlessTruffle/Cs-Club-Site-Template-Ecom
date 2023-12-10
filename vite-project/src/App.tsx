import NavBar from './elements/navigation'

function App() {

  return (
    <>
      <NavBar />
      <main>
          <section className="product">
          <div className="product-image">
            <img src="product-image.jpg" alt="Product Name"></img>
          </div>
          <div className="product-details">
            <h1>Very real product</h1>
            <p className="price">$99.99</p>
            <p className="description">"funny latin text".</p>
            <div className="quantity">
              <label htmlFor="quantity">Quantity:</label>
              <input type="number" id="quantity" name="quantity" min="1" value="1"></input>
            </div>
            <button className="buy-button">Buy Now</button>
            <p className="availability">In Stock</p>
            <p className="shipping-info">Free Shipping</p>
            <p className="estimated-delivery">Estimated delivery: 2-3 days!?!?!</p>
          </div>
        </section>
        <section className="reviews">
          <h2>Even More Real Customer Reviews</h2>
          <ul>
            <li>
              <div className="reviewer">John Doe</div>
              <div className="review-rating">★★★★★</div>
              <p className="review-comment">"This product is amazing! Highly recommended!"</p>
            </li>
            <li>
              <div className="reviewer">Jane Smith</div>
              <div className="review-rating">★★★☆☆</div>
              <p className="review-comment">"It's good, but could be better."</p>
            </li>
            {/*add more reviews if it would look fine*/}
          </ul>
          <a href="#">See All Reviews</a> {/*remove this if u dont wanna add it*/}
        </section>

        <section className="preorder">
          <h2>Preorder Products</h2>
          <div className="preorder-product">
            <input type="checkbox" id="preorder-product1" className="preorder-checkbox"></input>
            <label htmlFor="preorder-product1">
              <img src="preorder-product1.jpg" alt="Preorder Product 1"></img>
              <h3>Preorder Product 1</h3>
              <p className="price">$69.99</p>
            </label>
          </div>
          <div className="preorder-product">
            <input type="checkbox" id="preorder-product2" className="preorder-checkbox"></input>
            <label htmlFor="preorder-product2">
              <img src="preorder-product2.jpg" alt="Preorder Product 2"></img>
              <h3>Preorder Product 2</h3>
              <p className="price">$89.99</p>
            </label>
          </div>
          {/* preorder stuff can be added here here */}
        </section>
      </main>
    </>
  )
}

export default App
