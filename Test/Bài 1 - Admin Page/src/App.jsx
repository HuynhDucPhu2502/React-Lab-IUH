import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/RootPage";
import DashboardPage from "./pages/dashboard-pages";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootPage />,
    children: [{ path: "", element: <DashboardPage /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
