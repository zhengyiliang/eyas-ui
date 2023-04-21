import { Button } from 'eyas-ui';
import React from 'react';

export default () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 100px)',
        gridRowGap: 24,
        gridColumnGap: 24,
      }}
    >
      <Button type="primary" disabled>
        Primary
      </Button>
      <Button disabled>Secondary</Button>
      <Button type="outline" disabled>
        Outline
      </Button>
      <Button type="text" disabled>
        Text
      </Button>

      <Button type="primary" status="warning" disabled>
        Primary
      </Button>
      <Button status="warning" disabled>
        Secondary
      </Button>
      <Button type="outline" status="warning" disabled>
        Outline
      </Button>
      <Button type="text" status="warning" disabled>
        Text
      </Button>

      <Button type="primary" status="danger" disabled>
        Primary
      </Button>
      <Button status="danger" disabled>
        Secondary
      </Button>
      <Button type="outline" status="danger" disabled>
        Outline
      </Button>
      <Button type="text" status="danger" disabled>
        Text
      </Button>

      <Button type="primary" status="success" disabled>
        Primary
      </Button>
      <Button status="success" disabled>
        Secondary
      </Button>
      <Button type="outline" status="success" disabled>
        Outline
      </Button>
      <Button type="text" status="success" disabled>
        Text
      </Button>
    </div>
  );
};
