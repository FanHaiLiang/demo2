import React, { type FC } from 'react';
import { Button } from 'antd';

const AbbButton: FC<{
    /**
   * @description text
   * @default 默认值
   */
    title: string
}> = (props) => <Button type="primary">{props.title}</Button>;

export default AbbButton;
