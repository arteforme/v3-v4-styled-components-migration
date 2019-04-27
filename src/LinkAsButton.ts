import LinkWithAttrs from './LinkWithAttrs';
import styled from 'styled-components';

const LinkAsButton = styled(LinkWithAttrs).attrs({
  as: 'button'
})`
  border: solid 1px red;
`;

export default LinkAsButton;
