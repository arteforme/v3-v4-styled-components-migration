import Link from './Link';
import styled from 'styled-components';

const LinkWithMergedAttributes = styled(Link).attrs<{ className?: string }>({
  className: 'class-from-attrs'
})`
  border: solid 1px black;
  border-radius: 5px;
`;

export default LinkWithMergedAttributes;
