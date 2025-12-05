export default function About() {
  return (
    <section id="about" className="container-fluid p-0" style={{backgroundColor: '#e6e9ff', minHeight: '100vh'}}>
      <div className="row g-0 h-100">
        <div className="col-lg-6 col-12 d-flex flex-column justify-content-center px-3 px-md-5 py-4 py-lg-0">
          <h6 className="text-muted mb-4" style={{fontSize: '0.9rem'}}>ROI-Focused Strategist</h6>
          <h1 className="fw-bold mb-4" style={{fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', lineHeight: '1.1', color: '#000'}}>Jay Reed is a results-oriented digital marketing consultant with over a decade of experience driving growth for businesses across various industries. We specialize in SEO,</h1>
          <button className="btn btn-dark px-4 py-2 mt-3" style={{width: 'fit-content'}}>Learn More</button>
        </div>
        <div className="col-lg-6 col-12 p-0 position-relative overflow-hidden" style={{minHeight: '50vh'}}>
          <img src="/chart.png" alt="Analytics Dashboard" className="position-absolute top-0 start-0 w-100 h-100" style={{objectFit: 'cover'}} />
        </div>
      </div>
    </section>
  )
}