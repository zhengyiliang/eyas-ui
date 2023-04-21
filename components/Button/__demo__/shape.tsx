import { PlusOutlined } from '@ant-design/icons';
import { Button, Space } from 'eyas-ui';
import React from 'react';

export default () => {
  return (
    <Space size="large">
      <Button type="primary" shape="circle">
        <PlusOutlined />
      </Button>
      <Button type="primary" shape="round">
        <PlusOutlined /> 添加
      </Button>
      <Button type="primary">
        <PlusOutlined /> 添加
      </Button>
      <Button type="primary">
        <PlusOutlined />
      </Button>
      <Button type="primary" iconOnly>
        <PlusOutlined />
      </Button>
    </Space>
  );
};
