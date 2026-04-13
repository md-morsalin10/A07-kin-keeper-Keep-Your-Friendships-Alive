import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router';
import RootLayout from './layout/RootLayout';
import HomePage from './pages/HomePage/HomePage';
import TrendingPage from './pages/TrendingPage/TrendingPage';
import StatsPage from './pages/StatsPage/StatsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children:[
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path:"/trending",
        element: <TrendingPage/>
      },
      {
        path:"/stats",
        element:<StatsPage/>
      }
    ],
    errorElement: <h2>page not found</h2>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />,
  </StrictMode>,
)
