import { Button, Space } from 'eyas-ui';
import React from 'react';

export default () => {
  return (
    <Space
      direction="vertical"
      size="large"
      style={{ width: 360, border: '1px solid #ddd', padding: 20 }}
    >
      <Button type="primary" block>
        Primary
      </Button>
      <Button type="primary" shape="round" block>
        Primary
      </Button>
      <Button block>Secondary</Button>
      <Button type="outline" block>
        Outline
      </Button>
      <Button type="text" block>
        Text
      </Button>
    </Space>
  );
};
