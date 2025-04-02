import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import store from '../src/store.js'
import app from "./firebase"; // ❌ app 필요 없음
import db from "./firebase";  // ✅ db는 default export라 `{}` 없이 가져오기


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
)
