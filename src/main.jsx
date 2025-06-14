import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './utils/i18n'; // Importa a configuração de i18n
import './styles/global.css';
import "react-image-gallery/styles/css/image-gallery.css";
import "./styles/customGallery.css"; // Estilos personalizados para o ImageGallery com ícone de fogueira

// Criar o router com a flag future.useTransition
const router = createBrowserRouter(
  [
    {
      path: "/*",
      element: <App />
    }
  ],
  {
    future: {
      v7_startTransition: true
    }
  }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
