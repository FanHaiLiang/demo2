import React, { type FC } from 'react';
import { Button } from 'antd';

const Test: FC<{ title: string }> = (props) => <Button style={{ color: 'green' }}>{props.title}test</Button>;

export default Test;
