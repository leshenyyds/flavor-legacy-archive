import React from 'react';
import { Spin } from 'antd';
import '../assets/css/Loading.css';

const Loading = ({ text = '正在加载...' }) => {
  return (
    <div className="loading-container">
      <Spin size="large" />
      {text && <p className="loading-text">{text}</p>}
    </div>
  );
};

export default Loading;

