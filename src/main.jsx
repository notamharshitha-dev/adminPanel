import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './components/login/login.jsx'
import HomePage from './components/home/home.jsx'
import DoctorsPage from './components/doctors/doctors.jsx'
import Apponitments from './components/appointment/appointment.jsx'
import AddDoctor from './components/doctors/addDoctor.jsx'
const router=createBrowserRouter([
  {
    path:"/",
    element:<LoginPage/>
  },
  {
    path:"/homePage",
    element:<HomePage/>
  },
  {
    path:"/doctorsPage",
    element:<DoctorsPage/>
  },
  {
    path:"/appointments",
    element:<Apponitments/>
  },
  {
    path:"/addDoctorPage",
    element:<AddDoctor/>
  }
])
createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <RouterProvider router={router} ></RouterProvider>
  </Provider>
)
