import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home/Home'
import { LandingPage } from '../pages/landing/Landing'
import ErrorPAge from '../error-page/ErrorPage'
import LayoutPublic from '../components/layout/LayoutPublic'
import Details from "../components/details/Details"


export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <ErrorPAge />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: <Details />
      },
    ]
  }

])