import TeamImage from "./../assets/People.jpg"
function About() {
  return (
    <main>
      <section className="about">
        <div className="about-content">
          <h1>About Us</h1>
          <p>We are a passionate team dedicated to delivering quality products to our customers. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <img src={TeamImage} alt="No Team Image Found" />
        </div>
      </section>
    </main>
  );
}

export default About;
