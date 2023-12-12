import SorcererImage from "./../assets/SorcererStaff.png"

function ItemDetailCart() {

  return (
    <>
        <main>
            <section className="product">
            <div className="product-image">
            <img src={SorcererImage} alt="Sorcerer's Staff"></img>
            </div>
            <div className="product-details">
            <h1>Sorcerer's Staff</h1>
            <p className="price">$49.99</p>
            <p className="description">"A powerful staff wielded by wizards and sorcerers, channeling magical energies."</p>
            <div className="quantity">
                <label htmlFor="quantity">Quantity:</label>
                <input className='product-quantity-input' type="number" id="quantity" name="quantity" min={1} max={99}></input>
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
                <div className="magnifier">
                <img src="preorder-product1.jpg" alt="Preorder Product 1" />
                </div>
                <img src="preorder-product1.jpg" alt="Preorder Product 1" />
                <h3>Magical Dagger</h3>
                <p className="price">$69.99</p>
            </label>
            </div>
            <div className="preorder-product">
            <input type="checkbox" id="preorder-product2" className="preorder-checkbox"></input>
            <label htmlFor="preorder-product2">
                <div className="magnifier">
                <img src="preorder-product2.jpg" alt="Preorder Product 2" />
                </div>
                <img src="preorder-product2.jpg" alt="Preorder Product 2" />
                <h3>Hat Of Many Secrets</h3>
                <p className="price">$89.99</p>
            </label>
            </div>
            {/* preorder stuff can be added here here */}
            </section>
        </main>

    </>
  )
}

export default ItemDetailCart


