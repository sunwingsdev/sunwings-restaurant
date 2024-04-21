import { RouterProvider } from "react-router-dom";
import Router from "./routes/Router";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import { ToastProvider } from "react-toast-notifications";

function App() {
  return (
    <>
      <Provider store={Store}>
        <ToastProvider>
          <RouterProvider router={Router} />
        </ToastProvider>
      </Provider>
    </>
  );
}

export default App;
