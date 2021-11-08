import React from "react";
import { DatePicker }  from "antd";
import Index from "./views/index";
import "./App.css";

class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      name:"xiaolan"
    }
  }
  componentDidMount (){


  }
  componentWillUnmount (){

  }
  render(){
    return (
      <div className="main">
        <div>我是首页{ this.state.name }</div>
        <DatePicker/>
        <Index>
          <div>111</div>
        </Index>
      </div>
    );
  }
};

export default App;