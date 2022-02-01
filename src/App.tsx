import React, { FC } from "react";
import styled from "styled-components";
import SvgIcon from "./components/SvgIcon";


export const App: FC = () => {
  return (
    <Container name="xiaolan">
      <div>react</div>
      <Wrpper>
        2222
      </Wrpper>
      <SvgIcon iconClass="avatar"></SvgIcon>
    </Container>


  );
}
const Container = styled.div<{name?:string}>`
  width:${props => props.name ? '200px' : '100px'};
  height:200px;
  background:red;

`
const Wrpper = styled(Container)`
  color:black;
  font-weight:bold;
  background:#78e710;
`