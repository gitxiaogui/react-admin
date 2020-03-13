import React,{Component} from 'react';
import {Route,withRouter,Redirect} from 'react-router-dom'
import CoverManage from "../approve/coverManage";
import HomePhotoManage from "../approve/homePhotoManage";
import UserManage from "../user/userManage";
import Paynum from "../user/paynum";
import UserCost from "../user/userCost";
import Home from "../home/home";
import LoginForm from "../login/login";

class RouterList extends Component{
  render(){
    return(
      <div>

        <Route exact path="/home" component={Home}></Route>
        <Route exact path='/approve/coverManage' component={CoverManage}></Route>
        <Route exact path='/approve/homePhotoManage' component={HomePhotoManage}></Route>

        <Route exact path="/user/userManage" component={UserManage}></Route>
        <Route exact path="/user/payNum" component={Paynum}></Route>
        <Route exact path="/user/userCost" component={UserCost}></Route>

      </div>
    )
  }
}
export default withRouter(RouterList);