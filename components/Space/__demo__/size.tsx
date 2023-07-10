import { Button, Radio, Space } from 'eyas-ui';
import React, { useState } from 'react';

export default () => {
  const [size, setSize] = useState('small');
  return (
    <>
      <Radio.Group
        value={size}
        options={['mini', 'small', 'medium', 'large']}
        onChange={setSize}
      />
      <br />
      <Space size={size}>
        <Button type="primary">Item1</Button>
        <Button type="primary">Item2</Button>
        <Button type="primary">Item3</Button>
      </Space>
      <br />
      <br />

      {/* number */}
      <Space size={100}>
        <Button type="primary">Item1</Button>
        <Button type="primary">Item2</Button>
        <Button type="primary">Item3</Button>
      </Space>
    </>
  );
};
