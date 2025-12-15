import React from 'react';
import { Spin } from 'antd';
import '../assets/css/Loading.css';

const Loading = ({ text = '正在加载...' }) => {
  return (
    <div className="loading-container">
      <Spin size="large" tip={text} />
    </div>
  );
};

export default Loading;

