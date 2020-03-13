import React,{Component} from 'react';

import RouterList from "../menu/router";
import { Layout, Icon,Dropdown,Menu } from 'antd';
import MenuNav from '../menu/menu'
const { Header, Sider, Content } = Layout;


class Layer extends Component{
  state = {
    collapsed: false,
    openKeys: [],
    selectedKeys: []
  };
  constructor(props){
    super(props)
    this.logout = this.logout.bind(this)
  }
  componentDidMount(){

  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  logout(){
    localStorage.removeItem('token')
    this.props.history.push('/login')
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <a target="_blank" rel="noopener noreferrer" onClick={this.logout} >
            退出登录
          </a>
        </Menu.Item>
      </Menu>
    );
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <MenuNav></MenuNav>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: "0 20px",display:'flex',justifyContent:'space-between',alignItems:'center' }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <div>
              <Dropdown overlay={menu}>
                  <img style={{height:"50px",width:'50px',borderRadius:'50%'}} src="http://img.17kuxiu.com/livingImg/defult_liveimg.png_cover" alt=""/>
              </Dropdown>
            </div>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            <RouterList />
          </Content>
        </Layout>
      </Layout>
    );
  }
}


export default Layer;
