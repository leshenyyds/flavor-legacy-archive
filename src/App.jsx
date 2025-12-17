import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import ArchiveList from './pages/ArchiveList';
import ArchiveDetail from './pages/ArchiveDetail';
import Techniques from './pages/Techniques';
import Stories from './pages/Stories';
import MapPage from './pages/MapPage';
import Interactive from './pages/Interactive';
import Protection from './pages/Protection';
import About from './pages/About';
import NotFound from './pages/NotFound';
import InheritorList from './pages/InheritorList';
import InheritorDetail from './pages/InheritorDetail';
import './assets/css/App.css';



const ScrollToTop = () => {

  // 获取当前路径名
  const { pathname } = useLocation();
 // A->B
  useEffect(() => {
    // 钩子要执行的函数
    window.scrollTo(0, 0);
  }, [
      pathname
      // 这个钩子触发的时候
      // 监听的变量数组（放多个变量）
  ]);


  window.scrollTo(0, 0);

  return null;
};





const App = () => {
  console.log('App 组件执行了（重渲染）');
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>


        <Router>
          <div className="flex flex-col min-h-screen" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#FDF5E6' }}>
            <ScrollToTop />
            <Header />
            <main className="flex-grow" style={{ flex: '1 1 auto', minHeight: '0', padding: '20px' }}>

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/archive" element={<ArchiveList />} />
                <Route path="/archive/:id" element={<ArchiveDetail />} />
                <Route path="/techniques" element={<Techniques />} />
                <Route path="/stories" element={<Stories />} />
                <Route path="/inheritors" element={<InheritorList />} />
                <Route path="/inheritors/:id" element={<InheritorDetail />} />
                <Route path="/map" element={<MapPage />} />
                <Route path="/interactive" element={<Interactive />} />
                <Route path="/protection" element={<Protection />} />
                <Route path="/about" element={<About />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
              </Routes>

            </main>
            <Footer />
          </div>
        </Router>


      </PersistGate>
    </Provider>
  );
};




export default App;

