import { RouterProvider } from "react-router-dom";
import route from "./AppRoutes";
const App = () => {
  return (
    <RouterProvider router={route}/>
  )
}

export default App;