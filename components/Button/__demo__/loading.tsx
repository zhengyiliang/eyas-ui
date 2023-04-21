import { Button, Space } from 'eyas-ui';
import React, { useState } from 'react';

export default () => {
  const [loading, setLoading] = useState(false);
  return (
    <Space size="large">
      <Button
        type="primary"
        loading={loading}
        onClick={() => {
          setLoading(!loading);
          setTimeout(() => {
            setLoading(false);
          }, 5000);
        }}
      >
        Primary
      </Button>
      <Button loading>Secondary</Button>
      <Button type="outline" loading>
        Outline
      </Button>
      <Button type="text" loading>
        Text
      </Button>
    </Space>
  );
};
