import React,{Component} from 'react';
import {Route,Link,Switch} from 'react-router-dom'
import Layer from './views/menu/layer'
import RouterList from "./views/menu/router";
import { Layout, Menu, Icon } from 'antd';
import MenuNav from './views/menu/menu'
import LoginForm from "./views/login/login";
const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;


class App extends Component{
  state = {
    collapsed: false,
    openKeys: [],
    selectedKeys: []
  };
  constructor(props){
    super(props)
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
    <Switch>
      <Route path='/login' component={LoginForm}/>
      <Route path='/' component={Layer}/>
    </Switch>
    );
  }
}


export default App;
