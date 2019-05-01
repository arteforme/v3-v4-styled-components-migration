import './App.css';

import * as React from 'react';

import styled from 'styled-components';

const Link = styled.a`
  border: solid 1px black;
  border-radius: 5px;
  padding: 5px;
  margin: 10px 5px;
`;

// Approach #1 - This doesn't work.  None of the button props are known to TS
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
const LinkAsButton = styled(Link).attrs<ButtonProps>({
  as: 'button',
  className: 'btn btn-primary'
})`
  border: solid 1px red;
`;

// Approach #2 - This works but it only allows `disaabled` to be specified
// interface MinimalProps {
//   as: string;
//   className: string;
//   disabled?: boolean;
// }
// const LinkAsButton = styled(Link).attrs<{}, MinimalProps>({
//   as: 'button',
//   className: 'btn btn-primary'
// })`
//   border: solid 1px red;
// `;

// Approach #3 - This works, but `as` and `className` must be hard coded/repeated
// in the markup
// type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
// const LinkAsButton = styled(Link)<ButtonProps>`
//   border: solid 1px red;
// `;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Link>Link</Link>
        {/* use with approach #1 or #2  */}
        <LinkAsButton disabled={true}>Link as Button</LinkAsButton>
        {/* use with approach #3  */}
        {/* <LinkAsButton as="button" className="btn btn-primary" disabled={true}>Link as Button</LinkAsButton> */}
      </div>
    );
  }
}

export default App;
