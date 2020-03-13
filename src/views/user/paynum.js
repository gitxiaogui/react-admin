import React,{Component} from 'react'
import store from '../../store';
import { changeInputValue } from '../../store/actionsCreators'
class Paynum extends Component{
  constructor(props){
    super(props)

    this.storeChnage = this.storeChnage.bind(this);
    this.changeInput = this.changeInput.bind(this);
    this.state = store.getState();
    store.subscribe(this.storeChnage)
  }
  storeChnage(){
    console.log(this)
    this.setState(store.getState())
  }
  changeInput(){
    let action = changeInputValue('哈哈哈哈哈')
    store.dispatch(action)
  }
  render(){
    return(
      <div>
        充值查询<br />
        {this.state.inputValue}
        <p onClick={this.changeInput}>点击改变input的值</p>
      </div>
    )
  }
}
export default Paynum;
