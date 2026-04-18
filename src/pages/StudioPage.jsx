import React, { useState } from 'react';
import Studio from '../components/Studio';

const StudioPage = ({ onProcessComplete }) => {
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturation, setSaturation] = useState(100);

  return (
    <div className="container" style={{ paddingTop: '160px', paddingBottom: '120px' }}>
      {/* PLAYGROUND HEADER */}
      <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px' }}>
        <div>
          <div className="status-badge" style={{ marginBottom: '16px' }}>V4.0 - STABLE_BUILD</div>
          <h1 className="mono" style={{ fontSize: '3rem', fontWeight: 900, letterSpacing: '-0.04em' }}>Playground_</h1>
        </div>
        <div style={{ textAlign: 'right' }}>
           <p className="mono" style={{ fontSize: '0.8rem', opacity: 0.5 }}>ACTIVE_SESSIONS: 01</p>
           <p className="mono" style={{ fontSize: '0.8rem', opacity: 0.5 }}>LATENCY: 12ms</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '32px', alignItems: 'start' }}>
        {/* WORKSPACE CANVAS */}
        <div className="reveal">
           <Studio onProcessComplete={onProcessComplete} filterStyle={{ filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)` }} />
           
           <div style={{ marginTop: '32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
              <div className="glass-card" style={{ padding: '20px' }}>
                 <p className="mono" style={{ fontSize: '0.7rem', color: 'var(--system-blue)', marginBottom: '12px' }}>// SYSTEM_LOG</p>
                 <p className="mono" style={{ fontSize: '0.8rem', opacity: 0.6 }}>Initial neural pass complete. Edge sampling set to 1.2px sigma.</p>
              </div>
              <div className="glass-card" style={{ padding: '20px', border: '1px solid var(--system-blue)', background: 'rgba(10, 132, 255, 0.05)' }}>
                 <p className="mono" style={{ fontSize: '0.7rem', color: 'var(--system-blue)', marginBottom: '12px' }}>// CLOUD_READY</p>
                 <p className="mono" style={{ fontSize: '0.8rem' }}>Sync your playground to Code Clover Cloud for 4K processing.</p>
              </div>
           </div>
        </div>

        {/* FLOATING ADJUSTMENT PANEL */}
        <aside className="reveal animate-delay-1" style={{ position: 'sticky', top: '120px' }}>
          <div className="glass-card" style={{ padding: '28px' }}>
            <h3 className="mono" style={{ marginBottom: '32px', fontSize: '1.1rem', fontWeight: 700 }}>PARAMETERS</h3>
            
            <div style={{ display: 'grid', gap: '32px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <label className="mono" style={{ fontSize: '0.8rem', opacity: 0.7 }}>BRIGHTNESS</label>
                  <span className="mono" style={{ fontSize: '0.8rem', color: 'var(--system-blue)' }}>{brightness}%</span>
                </div>
                <input type="range" min="0" max="200" value={brightness} onChange={(e) => setBrightness(e.target.value)} />
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <label className="mono" style={{ fontSize: '0.8rem', opacity: 0.7 }}>CONTRAST</label>
                  <span className="mono" style={{ fontSize: '0.8rem', color: 'var(--system-blue)' }}>{contrast}%</span>
                </div>
                <input type="range" min="0" max="200" value={contrast} onChange={(e) => setContrast(e.target.value)} />
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <label className="mono" style={{ fontSize: '0.8rem', opacity: 0.7 }}>SATURATION</label>
                  <span className="mono" style={{ fontSize: '0.8rem', color: 'var(--system-blue)' }}>{saturation}%</span>
                </div>
                <input type="range" min="0" max="200" value={saturation} onChange={(e) => setSaturation(e.target.value)} />
              </div>
            </div>

            <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '0.5px solid var(--glass-border)' }}>
              <h4 className="mono" style={{ marginBottom: '20px', fontSize: '0.8rem', opacity: 0.4 }}>QUICK_SCRIPTS</h4>
              <div style={{ display: 'grid', gap: '10px' }}>
                <button className="ios-btn btn-secondary" style={{ width: '100%', justifyContent: 'flex-start', fontSize: '0.75rem', padding: '12px 16px', background: 'var(--surface-2)', border: 'none', fontFamily: 'var(--font-mono)' }}>_REFINE_EDGES</button>
                <button className="ios-btn btn-secondary" style={{ width: '100%', justifyContent: 'flex-start', fontSize: '0.75rem', padding: '12px 16px', background: 'var(--surface-2)', border: 'none', fontFamily: 'var(--font-mono)' }}>_AI_UPSCALE</button>
                <button className="ios-btn btn-secondary" style={{ width: '100%', justifyContent: 'flex-start', fontSize: '0.75rem', padding: '12px 16px', background: 'var(--surface-2)', border: 'none', fontFamily: 'var(--font-mono)' }}>_AUTO_LEVELS</button>
              </div>
            </div>
            
            <button 
              className="mono" 
              onClick={() => { setBrightness(100); setContrast(100); setSaturation(100); }}
              style={{ marginTop: '32px', width: '100%', background: 'transparent', border: 'none', fontSize: '0.7rem', opacity: 0.3, cursor: 'pointer', textAlign: 'center' }}
            >
              [RESET_ALL_PARAMS]
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default StudioPage;
