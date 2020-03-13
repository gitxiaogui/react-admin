const defaultState = {
  inputValue: '测试值',
  list:['测试1','测试2','测试3',]
}; // 默认数据



export default (state = defaultState,action)=>{
  if(action.type === 'CHANGE_INPUT_VALUE'){
      let data = JSON.parse(JSON.stringify(state))
      data.inputValue = action.value
    return data
  }
  return state
}
