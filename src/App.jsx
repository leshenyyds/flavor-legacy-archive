import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer } from './components/Layout';
import Home from './pages/Home';
import Archive from './pages/Archive';
import Detail from './pages/Detail';
import Techniques from './pages/Techniques';
import { Stories, MapPage, Interactive, Protection, About, NotFound } from './pages/MiscPages';
import { InheritorList, InheritorDetail } from './pages/Inheritors';
import './assets/css/App.css';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#FDF5E6' }}>
        <ScrollToTop />
        <Header />
        <main className="flex-grow" style={{ flex: '1 1 auto', minHeight: '0', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/techniques" element={<Techniques />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/inheritors" element={<InheritorList />} />
            <Route path="/inheritors/:id" element={<InheritorDetail />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/interactive" element={<Interactive />} />
            <Route path="/protection" element={<Protection />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

