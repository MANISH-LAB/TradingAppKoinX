import {Provider} from "react-redux"
import './App.css';
import Home from './components/Home';
import appStore from './utils/redux-store/appStore';
import Error from "./components/Error";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CryptoSelector from "./components/CryptoSelector";
import CryptoComponent from "./components/CryptoComponent";
function App() {
  const appRoot=createBrowserRouter([{
    path:"/",
    element:<Home />,
    children:[
      {path:"/",
      element:<CryptoSelector/>,
    },{
      path:"/cryptocurrency/:id",
      element:<CryptoComponent/>,
    },
    ],
    errorElement:<Error/>
  }]);
  return (
    <Provider store={appStore}>
    <div>
      <RouterProvider router={appRoot}/>
    </div>
    </Provider>
  );
}

export default App;
