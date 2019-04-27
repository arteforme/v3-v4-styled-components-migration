import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RouterLink = styled(Link).attrs({
  to: 'to'
})`
  border: solid 1px;
  border-radius: 5px;
  padding: 5px;
`;

export default RouterLink;
