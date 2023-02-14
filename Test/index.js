import React from 'react';
import { Button } from 'antd';
var Test = function Test(props) {
  return /*#__PURE__*/React.createElement(Button, {
    style: {
      color: 'green'
    }
  }, props.title, "test");
};
export default Test;