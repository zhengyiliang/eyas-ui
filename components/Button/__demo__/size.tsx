import { Button, Space } from 'eyas-ui';
import React from 'react';

export default () => {
  return (
    <>
      <Space size="large" style={{ marginBottom: 16 }}>
        <Button type="primary" size="mini">
          Mini
        </Button>
        <Button type="primary" size="small">
          Small
        </Button>
        <Button type="primary">Default</Button>
        <Button type="primary" size="large">
          Large
        </Button>
      </Space>
      <Space size="large">
        <Button type="primary" size="mini" status="danger">
          Mini
        </Button>
        <Button type="primary" size="small" status="danger">
          Small
        </Button>
        <Button type="primary" status="danger">
          Default
        </Button>
        <Button type="primary" size="large" status="danger">
          Large
        </Button>
      </Space>
    </>
  );
};
