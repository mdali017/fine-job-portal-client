import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import AppliedJob from './components/AppliedJob/AppliedJob';
import Blogs from './components/Blogs/Blogs';
import JobDetails from './components/JobDetails/JobDetails';
import JobMD from './components/AppliedJob/JobMD';
import ErrorPage from './components/ErrorPage/ErrorPage';
import storeProductLoader from './stroagedApplyJobLoader/StoreJob';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <App></App>
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'appliedJob',
        element: <AppliedJob></AppliedJob>,
        // loader: () => fetch('/fakeData.json')
        loader: storeProductLoader
      },
      // {
      //   path: 'job/:jobmdId',
      //   element: <JobMD></JobMD>,
      //   loader: (params) => fetch(`/fakeData.json`)
      // },
      // {
      //    path: '/home',
      //    element: <Home></Home>
      // },
      {
        path: '/:id',
        element: <JobDetails></JobDetails>,
        // loader: ({params}) => console.log(params.jobDeatlsId)
        // loader: ({params}) => fetch('/fakeData.json')
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
