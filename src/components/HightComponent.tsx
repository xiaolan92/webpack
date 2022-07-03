import hoistNonReactStatic from 'hoist-non-react-statics';
import React, {  FC } from 'react';

type MyRole = {
  name?: string,
  age?: number,
  area?: string,
  roleId: number,
  children:string
};


export const withPermission = (WrapComponent:any) => () => {
  const  BasePermission:FC<MyRole> = (props) => {

    const getName = () => {
      console.log(1111);
    };

    return (
        <>
        {  props.roleId === 2 ? <span>roleId为2</span> : <WrapComponent onClick={ getName }>{props.children }</WrapComponent> }

        </>

    );
  };
  hoistNonReactStatic(BasePermission, WrapComponent);
  BasePermission.displayName = 'withPermissionComponent';
  return BasePermission;


};
