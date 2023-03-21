import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";

const route = createBrowserRouter([
  {path: '/', element: <Home/> },
  {path: '/products', element: <Products/> },
])

function App() {
  return <RouterProvider router={route}/>;
}

export default App;
