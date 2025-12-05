export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <h1>Jay Reed<br />Digital</h1>
        <p>Amplify your digital resonance with<br />data-driven marketing solutions</p>
      </div>
      <div className="hero-image">
        <img src="/profile.jpg" alt="Jay Reed" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
      </div>
    </section>
  )
}