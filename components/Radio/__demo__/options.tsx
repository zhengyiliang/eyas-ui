import { Radio } from 'eyas-ui';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('上海');
  return (
    <>
      <Radio.Group
        // type="button"
        value={value}
        options={['上海', '北京', '深圳']}
        onChange={setValue}
      />
      <br />
      <Radio.Group
        type="button"
        defaultValue="shanghai"
        options={[
          {
            label: '上海',
            value: 'shanghai',
          },
          {
            label: '北京',
            value: 'beijin',
            disabled: true,
          },
        ]}
        onChange={setValue}
      />
    </>
  );
};
