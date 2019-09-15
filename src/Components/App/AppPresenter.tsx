import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import EditAccount from "Routes/EditAccount";
import FindAddress from "Routes/FindAddress";
import Home from "Routes/Home";
import Login from "Routes/Login";
import PhoneLogin from "Routes/PhoneLogin";
import Places from "Routes/Places";
import Ride from "Routes/Ride";
import Settings from "Routes/Settings";
import SocialLogin from "Routes/SocialLogin";
import VerifyPhone from "Routes/VerifyPhone";
import AddPlaces from "../../Routes/AddPlace";

interface IProps {
  isLoggedIn: boolean;
  // 만약 AppContainer에서 isLoggedIn을 인자로 넘기지 않을 경우 우리에게 알려주게 된다.
}

const LoggedOutRoutes: React.SFC = () => (
  <Switch>
    <Route path={"/"} exact={true} component={Login}/>
    <Route path={"/phone-login"} exact={true} component={PhoneLogin}/>
    <Route path={"/verify-phone/:number"} exact={true} component={VerifyPhone}/>
    <Route path={"/social-login"} exact={true} component={SocialLogin}/>
    <Redirect from={"*"} to={"/"} />
  </Switch>
);


const LoggedInRoutes: React.SFC = () => (
  <Switch>
    <Route path={"/"} exact={true} component={Home}/>
    <Route path={"/ride"} exact={true} component={Ride}/>
    <Route path={"/edit-account"} exact={true} component={EditAccount}/>
    <Route path={"/settings"} exact={true} component={Settings}/>
    <Route path={"/places"} exact={true} component={Places}/>
    <Route path={"/add-place"} exact={true} component={AddPlaces}/>
    <Route path={"/find-address"} exact={true} component={FindAddress}/>
    <Redirect from={"*"} to={"/"} />
  </Switch>
);

const AppPresenter: React.SFC<IProps> = ({ isLoggedIn }) => (
  <BrowserRouter>
    {isLoggedIn ? <LoggedInRoutes/>: <LoggedOutRoutes/>}
  </BrowserRouter>
  
);

export default AppPresenter;

// 어떻게 컴포넌트를 그릴지를 작성한다.


// SFC 를 사용하지 않았을 때의 문제점은 만약에 컴포넌트에서 
// JSX 가 아닌 문자열을 리턴하게 되는 경우 오류가 현재 파일이 아닌 최상위 App 에서 오류가 나타난다는 점