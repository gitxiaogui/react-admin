import React,{Component} from 'react';
import {Route,Link,withRouter} from 'react-router-dom'
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;
class MenuNav extends Component {
  constructor(props){
    super(props)
    this.onOpenChange = this.onOpenChange.bind(this)
    this.clickMenu = this.clickMenu.bind(this)
  }
  state = {
    collapsed: false,
    openKeys: [],
    selectedKeys: []
  }
  componentWillReceiveProps(location){
    this.setState({
      selectedKeys: [location.location.pathname],
    })
  }
  componentDidMount(){
    let nameKey = this.props.location.pathname =='/' ? '/home' : this.props.location.pathname
    let list = nameKey.split('/');
    console.log(list,list.slice(0, 3).join('/'))
    switch (list.length){
      case 2:
        this.setState({
          selectedKeys: [nameKey],
        })
        break
      case 3:
        this.setState({
          selectedKeys: [nameKey],
          openKeys: [list.slice(0, 2).join('/')],
        })
    }

  }
  onOpenChange(openKeys){
    //此函数的作用只展开当前父级菜单（父级菜单下可能还有子菜单）
    if (openKeys.length === 0 || openKeys.length === 1) {
      this.setState({
        openKeys
      })
      return
    }else{
      // 当选中一个还有子集菜单的时候需要清掉之前的数组
      this.setState({
        openKeys:[openKeys[openKeys.length-1]]
      })
    }
  }
  // 点击每个菜单的时候触发
  clickMenu(key){
    this.setState({
      selectedKeys:[key.key]
    })
  }
  render(){
    return(
      <div>
        <div className="logo" ><span>酷秀互娱</span></div>
        <Menu
          onOpenChange={this.onOpenChange}
          theme="dark"
          mode="inline"
          openKeys={this.state.openKeys}
          selectedKeys={this.state.selectedKeys}
          // onClick={(key)=>{this.setState({selectedKeys:[key]})}}
          onClick={this.clickMenu}
        >
          <Menu.Item key="/home">
            <Link to='/home'>
              <Icon type="home" />
              <span>首页</span>
            </Link>
          </Menu.Item>
          <SubMenu
            key="/user"
            title={
              <span>
                <Icon type="mail" />
                <span>用户管理</span>
              </span>
            }
          >
            <Menu.Item key="/user/userManage">
              <Link to='/user/userManage'>
                <Icon type="user" />
                <span>用户信息管理</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/user/userCost">
              <Link to='/user/userCost'>
                <Icon type="user" />
                <span>消费查询</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/user/paynum">
              <Link to='/user/paynum'>
                <Icon type="user" />
                <span>充值查询</span>
              </Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="/approve"
            title={
              <span>
                <Icon type="mail" />
                <span>审核管理</span>
              </span>
            }
          >
            <Menu.Item key="/approve/coverManage">
              <Link to='/approve/coverManage'>
                <Icon type="user" />
                <span>封面管理</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/approve/homePhotoManage">
              <Link to='/approve/homePhotoManage'>
                <Icon type="user" />
                <span>主页相册审核</span>
              </Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }


}
export default withRouter(MenuNav)

