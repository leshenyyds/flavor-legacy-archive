import React from 'react';
import '../assets/css/Loading.css';

const Loading = ({ text = '正在加载...' }) => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner-circle"></div>
        <div className="spinner-circle"></div>
        <div className="spinner-circle"></div>
      </div>
      <p className="loading-text">{text}</p>
    </div>
  );
};

export default Loading;

