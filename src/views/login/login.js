import React,{Component} from 'react'
import { Form, Icon, Input, Button } from 'antd';
class Login extends Component{
  constructor(props){
    super(props)
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.$http.login({
          userName:values.username,
          pwd:values.password,
          loginType:'0'
        }).then((res)=>{
          console.log(res)
          if(res.retCode === 200){
            localStorage.setItem('token',res.data.accessToken)
            this.props.history.push('/home')
          }
        })
      }
    });
  };
  componentWillMount(){
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='login-form-wrap'>
        <p style={{color:'#fff',fontSize:'32px'}}>酷秀互娱</p>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入账号!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="请输入账号"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="请输入密码"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
const LoginForm = Form.create({ name: 'normal_login' })(Login);
export default LoginForm