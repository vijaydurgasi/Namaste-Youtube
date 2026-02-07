
import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer"
import WatchPage from "./components/WatchPage";
import CategoryPage from "./components/CategoryPage";
import SearchPage from "./components/searchPage";


function App({ info }) {

  const appRouter = createBrowserRouter([{
    path: "/",
    element: (
      <>
        <Header />
        <Body />
      </>
    ),
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "watch",
        element: <WatchPage />
      },
      {
        path: "category/:type",
        element: <CategoryPage />
      },
      {
        path: "results",
        element: <SearchPage />
      }
    ]
  }]);

  return (
    <Provider store={store}>
      <div>
        {/* <Header /> */}
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
};

export default App;

