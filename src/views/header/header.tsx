import React, { FC } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

export const Header: FC = () => {
  return (
    <Container>
      头部1
      <Button type='primary' danger ghost>
        点击我
      </Button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  line-height: 50px;
  color: white;
  background: rgba(0, 0, 0, 0.85);
`;
