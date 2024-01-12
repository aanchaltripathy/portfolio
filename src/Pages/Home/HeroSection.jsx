export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Aanchal Tripathy</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">A Full Stack</span>{" "}
              <br />
              Developer
            </h1>
            <p className="hero--section-description">
             I build interesting websites using MERN stack
              <br /> Want to know more?
            </p>
          </div>
          <a href="https://www.linkedin.com/in/aanchal-tripathy-127321161/">
          <button className="btn btn-primary">Get In Touch</button></a>
        </div>
        <div className="hero--section--img">
    
          <img src="../image/me.jpeg" alt="ME" />
        </div>
      </section>
    );
  }