import React from 'react';
import { useTodoContext } from './context';
const Header = ({list}) => {
  const { haveToComplate} = useTodoContext();
    return <div className="header">You have {haveToComplate} tasks left!</div>;
  };
  
  export default Header;
  