import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 开发环境启动 MSW
async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser');
  return worker.start({
    onUnhandledRequest: 'bypass',
  });
}

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// 启动 MSW 后再渲染应用
enableMocking().then(() => {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      {/* React 启动项*/}
      <App />
    </React.StrictMode>
  );
});

