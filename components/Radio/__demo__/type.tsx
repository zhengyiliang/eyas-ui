import { Radio } from 'eyas-ui';
import React from 'react';

export default () => {
  return (
    <>
      <Radio.Group>
        <Radio value="a">A</Radio>
        <Radio value="b">B</Radio>
        <Radio value="c">C</Radio>
      </Radio.Group>
      <br />
      <Radio.Group type="button" defaultValue="a">
        <Radio value="a">A</Radio>
        <Radio value="b">B</Radio>
        <Radio value="c">C</Radio>
      </Radio.Group>
    </>
  );
};
