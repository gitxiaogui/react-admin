import React,{Component} from 'react';
import { Button,Input,Row, Col } from 'antd';

import './userManage.scss'
class UserManage extends Component{
  constructor(props){
    super(props)
    this.state={
      inputValue:'111',
      userInfo:{},
      moneyInfo:{},
      accountInfoDTO:{},
      show:false
    }
    this.searchBtn = this.searchBtn.bind(this)
    this.idManage = this.idManage.bind(this)

  }
  searchBtn(){
    const value = this.input.state.value
    this.$http.getUserManage({userId: value}).then((res)=>{
      console.log(res)
      if(res.retCode === 200){
        this.setState({
          userInfo: res.data.userInfo,
          moneyInfo: res.data.moneyInfo,
          accountInfoDTO: res.data.accountInfoDTO,
          show:true
        })
      }
    })
  }
  // 账号管理
  idManage(){

  }
  componentWillMount(){

  }
  render(){
    return (
      <div className="userManage">
        用户管理界面
        <div className="search">
          <Input ref={input => this.input = input} placeholder="请输入用户ID" defaultValue="77777009154" />
          <Button type="primary" onClick={this.searchBtn}>搜索</Button>
          <Button type="primary" onClick={this.idManage}>账号管理</Button>
        </div>
        <div className="content" style={this.state.show ? {display:'block'} : {display:'none'}}>
          <div className="gutter-example">
            <Row gutter={16}>
              <Col className="gutter-row" span={4}>
                <div className="gutter-box">用户头像：<img className="avatarImg" src={this.state.userInfo.avatarUrl} alt=""/></div>
              </Col>
              <Col className="gutter-row" span={4}>
                <div className="gutter-box">用户id：{ this.state.userInfo.userId }</div>
              </Col>
              <Col className="gutter-row" span={4}>
                <div className="gutter-box">用户等级：{this.state.userInfo.userLevel}</div>
              </Col>
              <Col className="gutter-row" span={4}>
                <div className="gutter-box">用户昵称：{this.state.userInfo.nickName}</div>
              </Col>
              <Col className="gutter-row" span={4}>
                <div className="gutter-box">主播等级：{this.state.userInfo.anchorLevel}</div>
              </Col>
              <Col className="gutter-row" span={4}>
                <div className="gutter-box">小组ID：{this.state.userInfo.groupId}</div>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col className="gutter-row" span={4}>
                <div className="gutter-box">上级ID：{this.state.userInfo.invitationId === 0 ? '' : this.state.userInfo.invitationId}</div>
              </Col>
              <Col className="gutter-row" span={4}>
                <div className="gutter-box">注册来源：{ this.state.accountInfoDTO.mobileModel }</div>
              </Col>
              <Col className="gutter-row" span={4}>
                <div className="gutter-box">出生年月日：{this.state.userInfo.birthday}</div>
              </Col>
              <Col className="gutter-row" span={4}>
                <div className="gutter-box">绑定手机号：{this.state.userInfo.areaCode}-{this.state.userInfo.mobile}</div>
              </Col>
              <Col className="gutter-row" span={4}>
                <div className="gutter-box"><span>操作平台：</span>
                  <span style={this.state.accountInfoDTO.loginType===0?{display:'block'}:{display:'none'}}>手机</span>
                  <span style={this.state.accountInfoDTO.loginType===1?{display:'block'}:{display:'none'}}>微信</span>
                  <span style={this.state.accountInfoDTO.loginType===2?{display:'block'}:{display:'none'}}>qq</span>
                </div>
              </Col>
              <Col className="gutter-row" span={4}>
                <div className="gutter-box">登录方式：{this.state.userInfo.groupId}</div>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col className="gutter-row" span={4}>
                <div className="gutter-box">用户身份：{this.state.userInfo.isAnchor ? '主播' : '普通用户'}</div>
              </Col>
              <Col className="gutter-row" span={4}>
                <div className="gutter-box">注册时间：{ this.state.accountInfoDTO.createTime }</div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }
}
export default UserManage