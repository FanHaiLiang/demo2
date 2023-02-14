import React, { type FC } from 'react';
import { Button } from 'antd';

const AbbButton: FC<{
    /**
   * @description text
   * @default 默认值
   */
    title: string
}> = (props) => <Button type="primary" size='small'>{props.title} 222333</Button>;

export default AbbButton;
