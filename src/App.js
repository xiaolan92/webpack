import React,{  Component } from "react";
import { DatePicker }  from "antd";
import "./App.css";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};

  }
  render(){
    return (
      <div className="main">
        <div>我是首页111</div>
        <DatePicker/>
      </div>
    );
  }
};

export default App;