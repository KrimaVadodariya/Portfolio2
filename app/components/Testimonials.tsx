'use client'
import { useState } from 'react'

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(2)
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechStart Inc",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "Jay's expertise in SEO and content strategy helped us increase our organic traffic by 300% in just 6 months."
    },
    {
      id: 2,
      name: "Janine Fox",
      company: "CloudSov Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      quote: "Jay's strategic approach and deep understanding of digital marketing transformed our online presence"
    }
  ]
  
  const nextTestimonial = () => {
    setCurrentTestimonial(prev => prev === 2 ? 1 : prev + 1)
  }
  
  const prevTestimonial = () => {
    setCurrentTestimonial(prev => prev === 1 ? 2 : prev - 1)
  }
  
  const current = testimonials.find(t => t.id === currentTestimonial)
  
  return (
    <section className="py-4 py-md-0" style={{backgroundColor: '#f8f9fa', minHeight: '100vh'}}>
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-lg-6 col-12 d-flex flex-column justify-content-center px-3 px-md-5 py-4 py-lg-0">
            <h2 className="fw-bold mb-4" style={{fontSize: 'clamp(3rem, 8vw, 6rem)', color: '#000', lineHeight: '0.9'}}>Testimonials</h2>
            <p className="mb-0" style={{color: '#666', fontSize: 'clamp(1rem, 2vw, 1.1rem)', lineHeight: '1.6', maxWidth: '400px'}}>
              See what our satisfied clients say about the transformative power of our marketing consultation services
            </p>
          </div>
          <div className="col-lg-6 col-12" style={{border: '1px solid #ddd'}}>
            <div className="d-flex" style={{height: '60px', borderBottom: '1px solid #ddd'}}>
              <button 
                onClick={prevTestimonial}
                className="btn d-flex align-items-center justify-content-center" 
                style={{
                  border: 'none', 
                  borderRight: '1px solid #ddd',
                  fontSize: '1.2rem', 
                  color: '#333', 
                  background: 'white',
                  width: '50%',
                  height: '100%'
                }}
              >
                ←
              </button>
              <button 
                onClick={nextTestimonial}
                className="btn d-flex align-items-center justify-content-center" 
                style={{
                  border: 'none', 
                  fontSize: '1.2rem', 
                  color: '#333', 
                  background: 'white',
                  width: '50%',
                  height: '100%'
                }}
              >
                →
              </button>
            </div>
            
            <div className="d-flex align-items-center justify-content-between" style={{minHeight: '80px', padding: '1rem 1rem 1rem 2rem', borderBottom: '1px solid #ddd'}}>
              <div className="rounded-circle border d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px', fontSize: '0.8rem', color: '#666', borderColor: '#ccc'}}>
                0{currentTestimonial}
              </div>
              <div className="text-end">
                <h3 className="fw-bold mb-1" style={{color: '#000', fontSize: 'clamp(1.5rem, 4vw, 3rem)', lineHeight: '1'}}>• {current?.name}</h3>
                <p className="text-muted mb-0" style={{fontSize: 'clamp(0.9rem, 2vw, 1rem)'}}>{current?.company}</p>
              </div>
            </div>
            
            <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center" style={{minHeight: '150px', padding: '1.5rem'}}>
              <img 
                src={current?.image} 
                alt={current?.name} 
                className="me-0 me-md-4 mb-3 mb-md-0" 
                style={{width: '80px', height: '80px', objectFit: 'cover'}}
              />
              <blockquote className="mb-0 flex-grow-1">
                <p className="mb-0" style={{color: '#000', fontSize: 'clamp(1rem, 2vw, 1.2rem)', fontWeight: '400', lineHeight: '1.4'}}>
                  "{current?.quote}"
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}