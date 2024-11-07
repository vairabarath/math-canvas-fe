import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Canvas from "./components/canvas/index";

import "./index.css";

const paths = [
  {
    path: "/",
    element: <Canvas />,
  },
];

const BrowserRouter = createBrowserRouter(paths);

const App = () => {
  return <RouterProvider router={BrowserRouter} />;
};

export default App;
