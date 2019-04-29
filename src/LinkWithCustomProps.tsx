import * as React from 'react';

import styled from 'styled-components';

interface Props {
  prop1?: string;
  prop2: boolean;
}

const LinkWithCustomProps = styled.a<Props>`
  border: ${(props) => (props.prop2 ? 'solid 1px red' : 'dashed 1px blue')};
  padding: ${(props) => props.prop1 || '5px'};
`;

export default LinkWithCustomProps;
