import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Hoompage from "../Homepage/Hoompage";
import GameDetails from "../GameDetails/GameDetails";
import Games from "../Games/Games";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ForgetPassword from "../Register/ForgetPassword";
import PrivetRout from "../../../../Dragon-news-with-router/src/components/Provider/PrivetRout";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children :[
        {
            index:true,
            element:<Hoompage/>
        },
         {
        path: "/game/:id",
        loader:() =>fetch('/game.json'),
        element:<PrivetRout>
         <GameDetails />
        </PrivetRout>
        
       
      },
        {

        path:'games',
        loader:() =>fetch('/game.json'),
        element:<Games/>
        },
        {
          path:"login",
          element:<Login/>
        },
        {
          path:'register',
          element:<Register/>
        },
        {
          path:'forget-password',
          element:<ForgetPassword/>
        }
    ] 
    
  },
]);