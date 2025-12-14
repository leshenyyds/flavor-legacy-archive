import React from 'react';
import { DEFAULT_IMAGE } from '../assets/data/commonData';
import '../assets/css/Footer.css';

export const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-container">
        <div className="footer-content">
          <h3 className="footer-title">舌尖非遗</h3>
          <p className="footer-desc">
            以数字之力，传承舌尖上的非遗文化。让更多人看见、了解、爱上非遗美食。
          </p>
          <div className="footer-copyright">
            © 版权所有 章康乐 徐诗祯
          </div>
        </div>
      </div>
    </footer>
  );
};

