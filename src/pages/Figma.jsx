import React from 'react';

const Figma = () => {
  return (
    <div className="container" style={{paddingTop:'140px'}}>
       <div className="ios-card" style={{display:'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', padding:'80px', alignItems:'center'}}>
          <div>
             <h1 style={{fontSize:'4rem', fontWeight:900, marginBottom:'24px'}}>SkyFlow <br/><span style={{color:'var(--system-blue)'}}>for Figma</span></h1>
             <p style={{fontSize:'1.3rem', color:'var(--label-secondary)', marginBottom:'40px'}}>
                Bring the world's most accurate background removal engine directly to your canvas. 
                Automate your design workflow with one click.
             </p>
             <button className="ios-btn btn-primary" style={{padding:'20px 60px'}}>Install Plugin</button>
          </div>
          <div style={{textAlign:'center'}}>
             <svg width="340" height="340" viewBox="0 0 24 24" fill="none" stroke="var(--system-blue)" strokeWidth="0.3">
                <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5A3.5 3.5 0 1 1 12 5.5V2z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M12 16h3.5a3.5 3.5 0 1 1-3.5 3.5V16z"/>
             </svg>
          </div>
       </div>
    </div>
  );
};

export default Figma;
