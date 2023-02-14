import React, { type FC } from 'react';
import { Button } from 'antd';

const BjlButton: FC<{ title: string }> = (props) => <Button type="link">{props.title}</Button>;

export default BjlButton;
