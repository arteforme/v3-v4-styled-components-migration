import './App.css';

import * as React from 'react';

import styled from 'styled-components';

const Link = styled.a`
  border: solid 1px black;
  border-radius: 5px;
  padding: 5px;
  margin: 10px 5px;
`;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
const LinkAsButton = Link.withComponent('button').extend.attrs<ButtonProps>({
  className: 'btn btn-primary'
})`
  border: solid 1px red;
`;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Link>Link</Link>
        <LinkAsButton disabled={true}>Link as Button</LinkAsButton>
      </div>
    );
  }
}

export default App;
