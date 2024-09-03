import{
  createBrowserRouter,RouterProvider
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: `${process.env.PUBLIC_URL}`,
      element : <Home/>
    },
    {
      path: `${process.env.PUBLIC_URL}/movie/:id`,
      element : <Detail/>,
    }
  ]);
  return <RouterProvider router={router}/>;
}

export default App;
