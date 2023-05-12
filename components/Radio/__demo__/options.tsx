import { Radio } from 'eyas-ui';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('上海');
  return (
    <Radio.Group
      // type="button"
      value={value}
      options={['上海', '北京', '深圳']}
      onChange={setValue}
    />
  );
};
