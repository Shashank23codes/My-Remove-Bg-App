import React from 'react';

const Footer = () => {
  return (
    <footer style={{padding: '120px 0 60px', borderTop: '1px solid var(--glass-border)', background:'var(--bg-black)'}}>
      <div className="container">
        <div style={{display:'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '60px', textAlign:'left', marginBottom:'80px'}}>
          <div>
            <div className="logo" style={{marginBottom:'24px'}}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--system-blue)" strokeWidth="2.5">
                <path d="M17.5 19a3.5 3.5 0 0 0 0-7h-1.5a7 7 0 1 0-12 5" />
                <path d="M12 9v10" />
                <path d="M9 16l3 3 3-3" />
              </svg>
              SkyFlow
            </div>
            <p style={{color:'var(--label-secondary)', lineHeight:1.6, maxWidth:'300px'}}>
              Professional-grade background removal platform powered by advanced AI and local browser performance. 
            </p>
          </div>
          <div>
            <h4 style={{marginBottom:'24px', fontWeight:900}}>Product</h4>
            <ul style={{listStyle:'none', display:'grid', gap:'12px'}}>
              <li><a href="#" style={{color:'var(--label-secondary)', textDecoration:'none', fontSize:'0.9rem'}}>Studio</a></li>
              <li><a href="#" style={{color:'var(--label-secondary)', textDecoration:'none', fontSize:'0.9rem'}}>Figma Plugin</a></li>
              <li><a href="#" style={{color:'var(--label-secondary)', textDecoration:'none', fontSize:'0.9rem'}}>API Access</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{marginBottom:'24px', fontWeight:900}}>Resources</h4>
            <ul style={{listStyle:'none', display:'grid', gap:'12px'}}>
              <li><a href="#" style={{color:'var(--label-secondary)', textDecoration:'none', fontSize:'0.9rem'}}>Help Center</a></li>
              <li><a href="#" style={{color:'var(--label-secondary)', textDecoration:'none', fontSize:'0.9rem'}}>Privacy Policy</a></li>
              <li><a href="#" style={{color:'var(--label-secondary)', textDecoration:'none', fontSize:'0.9rem'}}>Terms of Use</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{marginBottom:'24px', fontWeight:900}}>Company</h4>
            <p style={{color:'var(--label-secondary)', fontSize:'0.9rem', marginBottom:'12px'}}>Built by</p>
            <p style={{fontWeight:900, fontSize:'1rem', letterSpacing:'0.1em'}}>CODE CLOVER STUDIO</p>
          </div>
        </div>
        <div style={{paddingTop:'40px', borderTop:'1px solid var(--glass-border)', display:'flex', justifyContent:'space-between', alignItems:'center', opacity:0.5, fontSize:'0.85rem'}}>
          <p>&copy; 2026 SkyFlow AI. All rights reserved.</p>
          <div style={{display:'flex', gap:'24px'}}>
            <span>Twitter</span>
            <span>LinkedIn</span>
            <span>GitHub</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
