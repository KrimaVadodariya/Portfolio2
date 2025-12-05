export default function About() {
  return (
    <section id="about" className="container-fluid vh-100 p-0" style={{backgroundColor: '#e6e9ff'}}>
      <div className="row h-100 g-0">
        <div className="col-6 d-flex flex-column justify-content-center px-5">
          <h6 className="text-muted mb-4" style={{fontSize: '0.9rem'}}>ROI-Focused Strategist</h6>
          <h1 className="fw-bold mb-4" style={{fontSize: '3.5rem', lineHeight: '1.1', color: '#000'}}>Jay Reed is a results-oriented digital marketing consultant with over a decade of experience driving growth for businesses across various industries. We specialize in SEO,</h1>
          <button className="btn btn-dark px-4 py-2 mt-3" style={{width: 'fit-content'}}>Learn More</button>
        </div>
        <div className="col-6 p-0 position-relative overflow-hidden">
          <img src="/chart.png" alt="Analytics Dashboard" className="position-absolute top-0 start-0 w-100" style={{height: '100vh', objectFit: 'cover'}} />
        </div>
      </div>
    </section>
  )
}