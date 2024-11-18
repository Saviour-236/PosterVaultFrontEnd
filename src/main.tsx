import './index.css'


// imports related to react and react dom
import ReactDOM from 'react-dom/client'



// imports related to reactrouterdom
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


// imports related to redux
import { Provider } from 'react-redux'
import store from './Statemanagement/store'

//page components 
import HomePage from './publicPages/home'
import SignInPage from './publicPages/signIn'
import AdminPage from './protectedPages/adminPage'
import CartPage from './publicPages/cartPage'
import ErrorPage from './publicPages/errorPage'


//layout components
import Layout from './publicPages/layout'
import AdminLayout from './protectedPages/adminLayout'
import SignUpPage from './publicPages/signUpPage'

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
        path: "/cart",
        element: <CartPage />
      },

      {
        path: '/signIn',
        element: <SignInPage />,
      },
      {
        path: '/signUp',
        element: <SignUpPage />,
      },

      {
        path: '/admin',
        element: <AdminLayout />,
        children: [
          {
            path: '/admin',
            element: <AdminPage />
          },
        ]
      },

    ],
  },
  {path: '*', element: <ErrorPage />}

])
ReactDOM.createRoot(document.getElementById('root')!).render(
  
    <Provider store={store} >
      <RouterProvider router={Router} />
    </Provider>
)
