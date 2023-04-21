import { Button, Space } from 'eyas-ui';
import React from 'react';

export default () => {
  return (
    <Space size="large">
      <Button type="primary">Primary</Button>
      <Button>Secondary</Button>
      <Button type="outline">Outline</Button>
      <Button type="text">Text</Button>
      <Button type="link">Link</Button>
    </Space>
  );
};
