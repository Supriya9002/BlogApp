import './App.css';
import { Navbar } from './components/Navbar/NavBar';
import { Home } from './Pages/Home/Home';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './Redux/store';
import ErrorPage from './components/Error/ErrorPage';
import { CreatePost } from './components/CreatePost/CreatePost';
import { EditPost } from './components/EditPost/EditPost';
import { About } from './components/About/About';
import { BlogPost } from './components/BlogPost/BlogPost';


function App() {
  const router = createBrowserRouter([
    {path: "/", element: <Navbar/>, errorElement:<ErrorPage/> ,children:[
      {path: "/", element: <Home/>},
      {path: "/createPost", element: <CreatePost/>},
      {path: "/editPost/:blogID", element: <EditPost/>},
      {path: "/About", element: <About/>},
      {path: "/blog/:blogID", element: <BlogPost/>}
    ]}
  ])
  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  );
}

export default App;
