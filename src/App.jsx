import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Library from './pages/Library';
import Figma from './pages/Figma';
import StudioPage from './pages/StudioPage';

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [history, setHistory] = useState([]);

  // Logic to switch pages
  const navigate = (page) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };

  const handleProcessComplete = (item) => {
    setHistory(prev => [item, ...prev]);
  };

  const handleReedit = (item) => {
    // For now, we just navigate home. 
    // If we wanted to "restore" the studio state, we'd need more state lifting.
    navigate('home');
    alert(`Restoring ${item.name} to Studio...`); 
  };

  return (
    <div className="app-wrapper">
      <Navbar activePage={activePage} onNavigate={navigate} />

      <main style={{ minHeight: '90vh' }}>
        {activePage === 'home' && <Home onProcessComplete={handleProcessComplete} onNavigate={navigate} />}
        {activePage === 'studio' && <StudioPage onProcessComplete={handleProcessComplete} />}
        {activePage === 'gallery' && <Library history={history} onNavigate={navigate} onReedit={handleReedit} />}
        {activePage === 'figma' && <Figma />}
      </main>

      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin { to { transform: rotate(360deg); } }
      ` }} />
    </div>
  );
};

export default App;
