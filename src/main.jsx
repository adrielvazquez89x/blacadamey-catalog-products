import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router';
import Home from './pages/Home.jsx';
import ProductDetailsPage from './pages/ProductDetailsPage.jsx';
import NotFound from './components/Layout/NotFound/NotFound.jsx';
import FavoritesPage from './pages/FavoritesPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/products/:id',
        Component: ProductDetailsPage,
      },
      {
        path: '/favorites',
        Component: FavoritesPage
      },
      {
        path: '*',
        Component: NotFound
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
