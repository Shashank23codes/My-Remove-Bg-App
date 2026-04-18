import React from 'react';
import Studio from '../components/Studio';

const Home = ({ onProcessComplete, onNavigate }) => {
  return (
    <>
      <section className="hero reveal">
        <div className="container">
          <div className="status-badge" style={{ marginBottom: '24px', display: 'inline-block' }}>DEPLOYMENT: V4.0.2</div>
          <h1 style={{ fontSize: 'var(--h1-size)', marginBottom: '32px' }}>NEURAL_MAP <br/><span style={{color:'var(--system-blue)'}}>& background_removal.</span></h1>
          <p style={{ maxWidth: '700px', margin: '0 auto 60px', opacity: 0.8 }}>
            Professional-grade neural edge sampling for automated background extraction. 
            100% private, browser-native performance.
          </p>
          
          <div style={{marginBottom: '100px'}}>
             <Studio onProcessComplete={onProcessComplete} />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="container reveal" style={{padding: '100px 0'}}>
         <h2 style={{fontSize:'3rem', fontWeight:900, textAlign:'center', marginBottom:'80px'}}>PROCESS_PIPELINE</h2>
         <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'30px'}}>
            <div className="ios-card reveal animate-delay-1">
               <div style={{fontSize:'1.5rem', marginBottom:'24px', color: 'var(--system-blue)'}}>01//_UPLOAD</div>
               <p style={{fontSize: '0.9rem', opacity: 0.7}}>Inject high-resolution assets into the local playground. Supported: PNG, JPG, WebP.</p>
            </div>
            <div className="ios-card reveal animate-delay-2">
               <div style={{fontSize:'1.5rem', marginBottom:'24px', color: 'var(--system-blue)'}}>02//_NEURAL_PASS</div>
               <p style={{fontSize: '0.9rem', opacity: 0.7}}>Our edge-sampling engine identifies neural boundaries in milliseconds with zero server latency.</p>
            </div>
            <div className="ios-card reveal animate-delay-3">
               <div style={{fontSize:'1.5rem', marginBottom:'24px', color: 'var(--system-blue)'}}>03//_EXPORT</div>
               <p style={{fontSize: '0.9rem', opacity: 0.7}}>Retrieve studio-grade transparent assets instantly. Optimized for production design workflows.</p>
            </div>
         </div>
      </section>

      {/* CREATOR STUDIO HIGHLIGHT */}
      <section className="reveal" style={{background: 'var(--bg-secondary)', padding:'120px 0'}}>
         <div className="container">
            <div className="ios-card" style={{display:'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems:'center', background: 'transparent', border:'none'}}>
               <div className="reveal animate-delay-1">
                  <span style={{color:'var(--system-blue)', fontWeight:800, letterSpacing:'0.2em', fontSize:'0.7rem'}}>DASHBOARD_PREVIEW</span>
                  <h2 style={{fontSize:'3.5rem', fontWeight:900, margin:'24px 0'}}>Advanced <br/>Studio_Access.</h2>
                  <p style={{fontSize:'1.1rem', opacity: 0.7, marginBottom:'48px'}}>
                     Unlock parametric controls, brightness calibration, and saturation mapping in our professional Creator Studio.
                  </p>
                  <button className="ios-btn btn-primary" onClick={() => onNavigate('studio')} style={{padding:'18px 48px'}}>Launch_Studio_Dashboard</button>
               </div>
               <div className="reveal animate-delay-2" style={{position:'relative'}}>
                  <div className="playground-grid" style={{height:'440px', borderRadius:'var(--radius-lg)', border:'1px solid var(--glass-border)', display:'flex', alignItems:'center', justifyContent:'center'}}>
                     <span style={{fontSize:'8rem', opacity:0.1}}>🎬</span>
                  </div>
                  <div className="ios-card" style={{position:'absolute', bottom:'-20px', right:'-20px', padding:'24px', width:'280px', background:'var(--system-blue)', border:'none'}}>
                     <p style={{fontWeight:800, color:'white', fontSize:'0.85rem'}}>//_DESIGN_STABLE</p>
                     <p style={{color:'rgba(255,255,255,0.8)', fontSize:'0.75rem', marginTop:'8px'}}>Optimized for FontPair Playground aesthetic.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </>
  );
};

export default Home;
