
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import App from './App.jsx';
import './index.css';

const theme = {
  token: {
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: 400,
    fontWeightStrong: 700,
    fontWeightMedium: 500,
    fontWeightLight: 300,
  },
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider theme={theme}>
      <App />
    </ConfigProvider>
  </StrictMode>
);
