export default function Results() {
  return (
    <section className="container-fluid py-5" style={{backgroundColor: '#3498db'}}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-white mb-5" style={{fontSize: '2.5rem', fontWeight: '600'}}>Proven Results</h2>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="text-white">
              <div className="mb-2" style={{height: '4px', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '2px'}}>
                <div style={{height: '100%', width: '80%', backgroundColor: 'white', borderRadius: '2px'}}></div>
              </div>
              <h3 className="display-1 fw-bold mb-2">250%</h3>
              <p className="mb-4" style={{fontSize: '1.1rem', opacity: '0.9'}}>Average increase in client revenue</p>
              <div style={{height: '1px', backgroundColor: 'rgba(255,255,255,0.3)'}}></div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-white">
              <div className="mb-2" style={{height: '4px', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '2px'}}>
                <div style={{height: '100%', width: '90%', backgroundColor: 'white', borderRadius: '2px'}}></div>
              </div>
              <h3 className="display-1 fw-bold mb-2">500%</h3>
              <p className="mb-4" style={{fontSize: '1.1rem', opacity: '0.9'}}>Average ROI on client campaigns</p>
              <div style={{height: '1px', backgroundColor: 'rgba(255,255,255,0.3)'}}></div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-white">
              <div className="mb-2" style={{height: '4px', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '2px'}}>
                <div style={{height: '100%', width: '75%', backgroundColor: 'white', borderRadius: '2px'}}></div>
              </div>
              <h3 className="display-1 fw-bold mb-2">1M+</h3>
              <p className="mb-4" style={{fontSize: '1.1rem', opacity: '0.9'}}>Leads generated for clients</p>
              <div style={{height: '1px', backgroundColor: 'rgba(255,255,255,0.3)'}}></div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-white">
              <div className="mb-2" style={{height: '4px', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '2px'}}>
                <div style={{height: '100%', width: '85%', backgroundColor: 'white', borderRadius: '2px'}}></div>
              </div>
              <h3 className="display-1 fw-bold mb-2">1.2M+</h3>
              <p className="mb-4" style={{fontSize: '1.1rem', opacity: '0.9'}}>Social media followers gained</p>
              <div style={{height: '1px', backgroundColor: 'rgba(255,255,255,0.3)'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}