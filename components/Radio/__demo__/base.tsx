import { Radio } from 'eyas-ui';
import React from 'react';

export default () => {
  return (
    <>
      <Radio value="a">A</Radio>
      <Radio value="b" disabled>
        B
      </Radio>
    </>
  );
};
