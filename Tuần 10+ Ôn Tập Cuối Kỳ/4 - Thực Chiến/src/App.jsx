import { Provider } from "react-redux";
import store from "./features/store";
import { RouterProvider } from "react-router-dom";
import route from "./routes/AppRoutes";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={route} />
    </Provider>
  );
}

export default App;
