import * as React from 'react';

import Link from './Link';
import styled from 'styled-components';

const LinkAsButton = styled(Link).attrs({
  as: 'button'
})`
  border: solid 1px red;
`;

export default LinkAsButton;
