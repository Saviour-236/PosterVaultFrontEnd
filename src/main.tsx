import './index.css'


// imports related to react and react dom
import ReactDOM from 'react-dom/client'



// imports related to reactrouterdom
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


// imports related to redux
import { Provider } from 'react-redux'
import store from './Statemanagement/store'

//page components 
import HomePage from './routeComponents/ChildComponents/home'
import SignInPage from './routeComponents/ChildComponents/signIn'
import AdminPage from './routeComponents/ChildComponents/admin'


//layout components
import Layout from './routeComponents/layout'
import AdminLayout from './routeComponents/adminRouteComponents/adminLayout'

//routs 
const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/signIn',
        element: <SignInPage />,
      },
      {
        path: '/admin',
        element: <AdminLayout />,
        children:[
          {
            path:'/admin',
            element:<AdminPage />
          },
        ]
      },
      
    ],
  },

])
ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store} >
      <RouterProvider router={Router} />
    </Provider>
)
