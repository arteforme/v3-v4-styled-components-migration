import * as React from 'react';

import Link from './Link';
import styled from 'styled-components';

const LinkAsButton = styled(Link).attrs(
  (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => ({
    as: 'button',
    disabled: props.disabled
  })
)`
  border: solid 1px red;
`;

export default LinkAsButton;
