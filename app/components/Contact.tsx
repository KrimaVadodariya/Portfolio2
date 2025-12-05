export default function Contact() {
  return (
    <section id="contact" className="vh-100 d-flex align-items-center" style={{backgroundColor: '#000'}}>
      <div className="container-fluid">
        <div className="row h-100">
          <div className="col-6 d-flex flex-column justify-content-center ps-5">
            <h2 className="text-white fw-bold mb-4" style={{fontSize: '5rem', lineHeight: '1'}}>
              Let's ignite<br />your digital<br />success
            </h2>
            <p className="text-white mb-5" style={{fontSize: '1.1rem'}}>Book Your Free Strategy Session Now</p>
            
            <div className="mt-auto">
              <p className="text-white mb-1" style={{fontSize: '0.9rem'}}>500 Tarot Francine Street</p>
              <p className="text-white" style={{fontSize: '0.9rem'}}>info@jaysite.com</p>
            </div>
          </div>
          
          <div className="col-6 d-flex flex-column justify-content-center pe-5">
            <div className="bg-white p-4" style={{borderTop: '4px solid #3498db'}}>
              <form>
                <div className="row mb-3">
                  <div className="col-6">
                    <label className="form-label text-muted" style={{fontSize: '0.9rem'}}>First name</label>
                    <input type="text" className="form-control" placeholder="Enter your first name" style={{border: 'none', borderBottom: '1px solid #ddd', borderRadius: '0', padding: '0.5rem 0'}} />
                  </div>
                  <div className="col-6">
                    <label className="form-label text-muted" style={{fontSize: '0.9rem'}}>Last name</label>
                    <input type="text" className="form-control" placeholder="Enter your last name" style={{border: 'none', borderBottom: '1px solid #ddd', borderRadius: '0', padding: '0.5rem 0'}} />
                  </div>
                </div>
                
                <div className="row mb-3">
                  <div className="col-6">
                    <label className="form-label text-muted" style={{fontSize: '0.9rem'}}>Email *</label>
                    <input type="email" className="form-control" placeholder="Enter your email address" style={{border: 'none', borderBottom: '1px solid #ddd', borderRadius: '0', padding: '0.5rem 0'}} required />
                  </div>
                  <div className="col-6">
                    <label className="form-label text-muted" style={{fontSize: '0.9rem'}}>I'm interested in</label>
                    <select className="form-control" style={{border: 'none', borderBottom: '1px solid #ddd', borderRadius: '0', padding: '0.5rem 0', background: 'none'}}>
                      <option>Select</option>
                      <option>SEO</option>
                      <option>PPC</option>
                      <option>Social Media</option>
                      <option>Content Marketing</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="form-label text-muted" style={{fontSize: '0.9rem'}}>Message *</label>
                  <textarea className="form-control" rows={4} placeholder="Enter your message" style={{border: 'none', borderBottom: '1px solid #ddd', borderRadius: '0', padding: '0.5rem 0', resize: 'none'}} required></textarea>
                </div>
                
                <button type="submit" className="btn text-white fw-bold w-100 py-3" style={{backgroundColor: '#000', border: 'none'}}>
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}