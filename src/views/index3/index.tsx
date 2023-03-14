import React, { Component, ChangeEvent } from 'react';
import { Input, Button } from 'antd';

export class Index3 extends Component<unknown, unknown> {

  constructor(props: unknown) {
    super(props);
    this.state = {
      name: 'xiaolan',
    };
  }

  private getDemo = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  private show = () => {
    const obj = {
      name: 'xiaolan',
      age: 30,
      area: 'wuhan',
      roleId: 2,

    };
    return obj;

  };

  private setName = () => {
    console.log(111);
  };

  public render() {
    return (
      <>
        <div style={{ 'width': '300px' }}>
          <div dangerouslySetInnerHTML={{ __html: '<div>111</div>' }}></div>
          <Input placeholder='请输入内容' onChange={this.getDemo} />
          <Button onClick={this.setName}>节流</Button>
        </div>
      </>
    );
  }


}
