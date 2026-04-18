import React from 'react';

const Library = ({ history, onNavigate, onReedit }) => {
  return (
    <div className="container" style={{paddingTop:'140px'}}>
       <h1 style={{fontSize:'3.5rem', fontWeight:900, marginBottom:'40px'}}>Creation Library</h1>
       {history.length === 0 ? (
          <div className="ios-card" style={{textAlign:'center', padding:'100px'}}>
             <p style={{color:'var(--label-secondary)'}}>Your creative history will appear here.</p>
             <button className="ios-btn btn-primary" style={{marginTop:'24px', marginInline:'auto'}} onClick={() => onNavigate('home')}>Get Started</button>
          </div>
       ) : (
          <div className="grid-gallery">
             {history.map(item => (
                <div key={item.id} className="ios-card" style={{padding:'20px'}}>
                   <div style={{aspectRatio:'1', background:'var(--bg-secondary)', borderRadius:'16px', overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'16px'}}>
                      <img src={item.result} style={{maxWidth:'100%', maxHeight:'100%', objectFit:'contain'}} alt={item.name} />
                   </div>
                   <p style={{fontWeight:800, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{item.name}</p>
                   <button className="ios-btn btn-secondary" style={{width:'100%', marginTop:'12px', padding:'10px'}} onClick={() => onReedit(item)}>Studio View</button>
                </div>
             ))}
          </div>
       )}
    </div>
  );
};

export default Library;
