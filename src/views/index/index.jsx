import  React from "react";
import { Demo } from "../demo/demo";
class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:"武汉",
            list:[],
            content:"22333"
        }
        this.do = this.do.bind(this);
        this.getInput = this.getInput.bind(this);
    }
    do (args){
        const arr = [1,2,3,4,5,6];
        const Ali = arr.map(item =><li key={ item.toString() }>{ item }</li>);
        this.setState({
            list:Ali
        });
        console.log(args);
    }
    getInput(event){
        this.setState({
            content:event.target.value
        });

    }
    componentDidMount (){
        console.log(this.props.children);
    }
    render (){
        return (
            <div  className="index" onClick={ this.do.bind(this,this.state.name) }>222
            <ul style={{ color:'green'  }}>
            { this.state.list }
            </ul>
            { this.props.children }
            <textarea value={ this.state.content } onChange={ this.getInput }></textarea>
            <Demo></Demo>
            </div>
        );
    } 

}

export default Index;