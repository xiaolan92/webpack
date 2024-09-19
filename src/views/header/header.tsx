import React, { FC } from 'react';
import { Button } from 'antd';

export const Header: FC = () => {
  return (
    <div>
      头部1
      <Button type='primary' danger ghost>
        点击我
      </Button>
    </div>
  );
};
