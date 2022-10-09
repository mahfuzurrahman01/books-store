import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import Order from './Components/Order/Order';
import About from './Components/About/About';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/order',
          element: <Order></Order>
        },
        {
          path: '/about',
          element:<About></About>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
