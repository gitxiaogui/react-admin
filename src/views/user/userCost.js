import React,{Component} from 'react'
import moment from 'moment'
import { Form,  Input, Button,DatePicker } from 'antd';
import './userCost.scss'
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';

class UserCost extends Component{
  constructor(props){
    super(props)
    this.changeTime = this.changeTime.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      timer: ['2019-10-01','2019-10-28'],
      seatchForm: {},
      pageNum: 1,
      totalKucoin: ''
    }
  }
  changeTime(date, dateString){
    console.log(date, dateString)
  }
  handleSubmit(e){
    e.preventDefault()
    console.log(this)
    return
    this.props.form.validateFields((err, values) => {

    });
  }
  componentDidMount(){
    this.getData()
  }
  getData(){
    this.$http.findGiftConsume({
      startTime: this.state.timer[0] ? this.state.timer[0] : '',
      endTime: this.state.timer[1] ? this.state.timer[1] : '',
      pageNum: this.state.pageNum,
      pageSize: 10,
      uid:'',
      targetUid:''
  }).then((res)=>{
      if(res.retCode === 200){
        this.setState({
          totalKucoin: res.data.extMap.totalKucoin
        })
      }
    })
  }
  render(){
    return (
      <div className="userCost">
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Form.Item label="栏目中的金额的合计">
            <span>{this.state.totalKucoin}</span>
          </Form.Item>
          <Form.Item label="送礼用户ID">
              <Input
                type="number"
                placeholder="请输入送礼用户ID"
              />
          </Form.Item>
          <Form.Item label="收礼用户ID">
              <Input
                type="number"
                placeholder="收礼用户ID"
              />
          </Form.Item>
          <Form.Item label="日期">
            <RangePicker
              onChange={this.changeTime}
              defaultValue={[moment(new Date(), dateFormat), moment(new Date(), dateFormat)]}
              format={dateFormat}
            />
          </Form.Item>
          <Form.Item>
            <Button  type="primary" htmlType="submit" className="login-form-button">搜索</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
export default UserCost;