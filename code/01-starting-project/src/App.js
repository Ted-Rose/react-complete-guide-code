import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";

// the variable has to be stored in a constant
const router = createBrowserRouter([
  // Define path on which this path should be active
  // Path is following after .com like /login
  // Also define which component should be loaded with element.
  // For that add folder pages, but you can use whatever name
  // you like for the folder
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <ProductsPage /> },
]);

function App() {
  // Pass in the createBrowserRouter values constant
  // into RouterProvider so that for the defined path
  // defined element would be returned
  return <RouterProvider router={router} />;
}

export default App;
