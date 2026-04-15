import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter,  } from 'react-router';
import RootLayout from './layout/RootLayout';
import HomePage from './pages/HomePage/HomePage';
import StatsPage from './pages/StatsPage/StatsPage';
import Timeline from './pages/Timeline/Timeline';
import FriendsDetails from './pages/FriendsDetails/FriendsDetails';
import FriendsProvider from './context/FriendsProvider';
import { ToastContainer } from 'react-toastify';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/:id",
        loader: () => fetch('/data.json'),
        element: <FriendsDetails />
      },
      {
        path: "/timeline",
        element: <Timeline />
      },
      {
        path: "/stats",
        element: <StatsPage />
      },
      {
        path:"*",
        element: <ErrorPage/>
      }
    ],
   
  },
]);

createRoot(document.getElementById('root')).render(
  <FriendsProvider>
    <StrictMode>
      <RouterProvider router={router} />,
    </StrictMode>,
    <ToastContainer />
  </FriendsProvider>
)
