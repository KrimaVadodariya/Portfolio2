export default function Results() {
  return (
    <section className="container-fluid py-4 py-md-5" style={{backgroundColor: '#3498db'}}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-white mb-4 mb-md-5" style={{fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: '600'}}>Proven Results</h2>
          </div>
        </div>
        <div className="row g-3 g-md-4">
          <div className="col-sm-6 col-12">
            <div className="text-white">
              <div className="mb-2" style={{height: '4px', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '2px'}}>
                <div style={{height: '100%', width: '80%', backgroundColor: 'white', borderRadius: '2px'}}></div>
              </div>
              <h3 className="fw-bold mb-2" style={{fontSize: 'clamp(3rem, 8vw, 6rem)'}}>250%</h3>
              <p className="mb-3 mb-md-4" style={{fontSize: 'clamp(1rem, 2vw, 1.1rem)', opacity: '0.9'}}>Average increase in client revenue</p>
              <div style={{height: '1px', backgroundColor: 'rgba(255,255,255,0.3)'}}></div>
            </div>
          </div>
          <div className="col-sm-6 col-12">
            <div className="text-white">
              <div className="mb-2" style={{height: '4px', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '2px'}}>
                <div style={{height: '100%', width: '90%', backgroundColor: 'white', borderRadius: '2px'}}></div>
              </div>
              <h3 className="fw-bold mb-2" style={{fontSize: 'clamp(3rem, 8vw, 6rem)'}}>500%</h3>
              <p className="mb-3 mb-md-4" style={{fontSize: 'clamp(1rem, 2vw, 1.1rem)', opacity: '0.9'}}>Average ROI on client campaigns</p>
              <div style={{height: '1px', backgroundColor: 'rgba(255,255,255,0.3)'}}></div>
            </div>
          </div>
          <div className="col-sm-6 col-12">
            <div className="text-white">
              <div className="mb-2" style={{height: '4px', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '2px'}}>
                <div style={{height: '100%', width: '75%', backgroundColor: 'white', borderRadius: '2px'}}></div>
              </div>
              <h3 className="fw-bold mb-2" style={{fontSize: 'clamp(3rem, 8vw, 6rem)'}}>1M+</h3>
              <p className="mb-3 mb-md-4" style={{fontSize: 'clamp(1rem, 2vw, 1.1rem)', opacity: '0.9'}}>Leads generated for clients</p>
              <div style={{height: '1px', backgroundColor: 'rgba(255,255,255,0.3)'}}></div>
            </div>
          </div>
          <div className="col-sm-6 col-12">
            <div className="text-white">
              <div className="mb-2" style={{height: '4px', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '2px'}}>
                <div style={{height: '100%', width: '85%', backgroundColor: 'white', borderRadius: '2px'}}></div>
              </div>
              <h3 className="fw-bold mb-2" style={{fontSize: 'clamp(3rem, 8vw, 6rem)'}}>1.2M+</h3>
              <p className="mb-3 mb-md-4" style={{fontSize: 'clamp(1rem, 2vw, 1.1rem)', opacity: '0.9'}}>Social media followers gained</p>
              <div style={{height: '1px', backgroundColor: 'rgba(255,255,255,0.3)'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}