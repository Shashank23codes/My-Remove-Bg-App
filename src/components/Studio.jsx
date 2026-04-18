import React, { useState, useRef } from 'react';
import { removeBackground } from '@imgly/background-removal';

const Studio = ({ onProcessComplete, filterStyle = {} }) => {
  const [state, setState] = useState('idle'); // idle, processing, result
  const [originalImage, setOriginalImage] = useState(null);
  const [resultUrl, setResultUrl] = useState('');
  const [originalUrl, setOriginalUrl] = useState('');
  const [progress, setProgress] = useState(0);
  const [bgColor, setBgColor] = useState('transparent');
  const [sliderPos, setSliderPos] = useState(50);
  const fileInputRef = useRef(null);

  const handleProcess = async (file) => {
    setOriginalImage(file);
    const url = URL.createObjectURL(file);
    setOriginalUrl(url);
    setState('processing');
    setProgress(0);

    try {
      const blob = await removeBackground(file, {
        progress: (key, current, total) => setProgress(Math.round((current / total) * 100))
      });
      const resUrl = URL.createObjectURL(blob);
      setResultUrl(resUrl);
      if (onProcessComplete) {
        onProcessComplete({ id: Date.now(), result: resUrl, original: url, name: file.name });
      }
      setState('result');
      setSliderPos(50);
    } catch (err) {
      alert(err.message);
      setState('idle');
    }
  };

  return (
    <div className="playground-grid" style={{ 
      position: 'relative', 
      width: '100%', 
      height: '700px', 
      borderRadius: 'var(--radius-lg)', 
      border: '1px solid var(--glass-border)',
      background: 'var(--bg-black)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* STATUS INDICATOR */}
      <div style={{ position: 'absolute', top: '24px', right: '24px', zIndex: 100 }}>
         <div className="status-badge">
            {state === 'idle' ? 'Ready_Build' : state === 'processing' ? `EXECUTING_AI_PASS: ${progress}%` : 'STUDIO: OUTPUT_STABLE'}
         </div>
      </div>

      {state === 'idle' && (
        <div onClick={() => fileInputRef.current.click()} className="reveal" style={{ textAlign: 'center', cursor: 'pointer', padding: '100px', width: '100%' }}>
           <input type="file" ref={fileInputRef} onChange={(e) => e.target.files[0] && handleProcess(e.target.files[0])} hidden />
           <div style={{ fontSize: '6rem', marginBottom: '32px', opacity: 0.8 }}>📦</div>
           <h3 style={{ fontSize: '2.2rem', fontWeight: 900, marginBottom: '16px', color: 'var(--system-blue)' }}>Initialize_Canvas</h3>
           <p style={{ color: 'var(--label-secondary)', fontSize: '0.9rem', opacity: 0.6 }}>[ Drag_and_Drop OR Click_to_Browse ]</p>
           <button className="ios-btn btn-primary" style={{ marginTop: '40px' }}>Select_Asset</button>
        </div>
      )}

      {state === 'processing' && (
        <div style={{ textAlign: 'center' }}>
           <div className="spinner" style={{ width: '100px', height: '100px', margin: '0 auto 40px', border: '1px solid rgba(10, 132, 255, 0.1)', borderTopColor: 'var(--system-blue)', borderRadius: '50%', animation: 'spin 0.6s linear infinite' }}></div>
           <h3 style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '0.1em' }}>REFINING_EDGE_MAPS...</h3>
        </div>
      )}

      {state === 'result' && (
        <div style={{ position: 'relative', width: '100%', height: '100%', ...filterStyle }}>
           <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${originalUrl})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
           <div style={{
             position: 'absolute', inset: 0, width: `${sliderPos}%`, overflow: 'hidden', borderRight: '1.5px solid var(--system-blue)',
             backgroundImage: bgColor === 'transparent' ? 'repeating-conic-gradient(#151517 0% 25%, #1f1f21 0% 50%)' : 'none',
             backgroundColor: bgColor, backgroundSize: '24px 24px'
           }}>
              <div style={{ width: `calc(100% * 100 / ${sliderPos})`, height: '100%', backgroundImage: `url(${resultUrl})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
           </div>
           
           {/* FLOATING ACTION PILL */}
           <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', zIndex: 100 }}>
              <div className="tool-pill" style={{ padding: '6px' }}>
                 <button className="ios-btn" style={{ padding: '10px 20px', fontSize: '0.75rem', background: 'var(--system-blue)', color: 'white' }} onClick={() => {
                   const a = document.createElement('a');
                   a.href = resultUrl;
                   a.download = `playground-${originalImage.name}`;
                   a.click();
                 }}>EXPORT_PNG_HD</button>
                 <button className="ios-btn" style={{ padding: '10px 20px', fontSize: '0.75rem', background: 'rgba(255,255,255,0.03)', color: 'white' }} onClick={() => setState('idle')}>RESET_WORKSPACE</button>
                 <div style={{ height: '32px', width: '1px', background: 'var(--glass-border)', margin: '0 8px' }}></div>
                 <div style={{ display: 'flex', gap: '8px', paddingRight: '12px' }}>
                    {['transparent', '#ffffff', '#000000'].map(c => (
                       <button key={c} onClick={() => setBgColor(c)} style={{ width: '32px', height: '32px', borderRadius: '50%', border: bgColor === c ? '2.5px solid var(--system-blue)' : '1px solid var(--glass-border)', background: c === 'transparent' ? 'white' : c }} />
                    ))}
                 </div>
              </div>
           </div>

           <input type="range" min="0" max="100" value={sliderPos} onChange={(e) => setSliderPos(e.target.value)} style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'ew-resize', width: '100%', height: '100%', zIndex: 10 }} />
        </div>
      )}
    </div>
  );
};

export default Studio;
