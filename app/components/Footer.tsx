export default function Footer() {
  return (
    <footer className="py-4" style={{backgroundColor: '#6366f1'}}>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-3 col-12 d-flex align-items-center justify-content-center justify-content-lg-start mb-3 mb-lg-0">
            <div className="text-white fw-bold" style={{fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: '1'}}>JR.</div>
            <div className="border-start border-white ms-4 ps-4 d-none d-lg-block" style={{height: '60px'}}></div>
          </div>
          
          <div className="col-lg-6 col-12 mb-3 mb-lg-0">
            <div className="row">
              <div className="col-sm-6 col-12 mb-3 mb-sm-0">
                <ul className="list-unstyled mb-0 text-center text-lg-start">
                  <li className="mb-2"><a href="#" className="text-white text-decoration-none" style={{fontSize: '0.9rem'}}>LinkedIn</a></li>
                  <li className="mb-2"><a href="#" className="text-white text-decoration-none" style={{fontSize: '0.9rem'}}>Facebook</a></li>
                  <li className="mb-2"><a href="#" className="text-white text-decoration-none" style={{fontSize: '0.9rem'}}>Twitter</a></li>
                  <li className="mb-2"><a href="#" className="text-white text-decoration-none" style={{fontSize: '0.9rem'}}>Instagram</a></li>
                </ul>
              </div>
              <div className="col-sm-6 col-12">
                <ul className="list-unstyled mb-0 text-center text-lg-start">
                  <li className="mb-2"><a href="#" className="text-white text-decoration-none" style={{fontSize: '0.9rem'}}>Privacy Policy</a></li>
                  <li className="mb-2"><a href="#" className="text-white text-decoration-none" style={{fontSize: '0.9rem'}}>Terms of Use</a></li>
                  <li className="mb-2"><a href="#" className="text-white text-decoration-none" style={{fontSize: '0.9rem'}}>Accessibility Statement</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-lg-3 col-12 text-center text-lg-end">
            <p className="text-white mb-0" style={{fontSize: '0.8rem'}}>
              © 2035 by JR Digital. Built on <a href="#" className="text-white">Wix Studio</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}