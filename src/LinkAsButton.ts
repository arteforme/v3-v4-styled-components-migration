import LinkWithMergedAttributes from './LinkWithMergedAttrs';
import styled from 'styled-components';

const LinkAsButton = styled(LinkWithMergedAttributes).attrs({
  as: 'button'
})`
  border: solid 1px red;
`;

export default LinkAsButton;
