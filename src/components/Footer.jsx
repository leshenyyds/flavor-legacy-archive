import React from 'react';
import { DEFAULT_IMAGE } from '../constants';
import '../assets/css/Footer.css';

export const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-container">
        <div>
          <h3 className="footer-title">舌尖非遗</h3>
          <p className="footer-desc">
            以数字之力，传承舌尖上的非遗文化。让更多人看见、了解、爱上非遗美食。
          </p>
          <div className="text-xs text-stone-500">
            © 2023 Flavor Legacy Archive. All rights reserved.
          </div>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4 text-lg">联系方式</h4>
          <ul className="footer-contact">
            <li>邮箱: contact@flavorlegacy.cn</li>
            <li>电话: 010-12345678</li>
            <li>地址: 北京市非遗文化产业园 A 座</li>
          </ul>
        </div>
        <div className="footer-right">
          <div className="qr-code-box">
             <img src={DEFAULT_IMAGE} alt="QR Code" className="w-full h-full object-cover" />
          </div>
          <span className="text-xs">关注公众号，获取更多非遗资讯</span>
        </div>
      </div>
    </footer>
  );
};

