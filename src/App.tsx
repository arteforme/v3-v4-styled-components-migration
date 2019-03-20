import './App.css';

import * as React from 'react';

import logo from './logo.svg';
import styled from 'styled-components';

interface TestProps {
  className?: string;
}

const Test = styled.div.attrs({
  className: 'testasdfadsf'
})`
  border: solid 1px red;
`;

const TestWithProps = styled.div.attrs<TestProps>({})``;

const StyledDiv = styled.div.attrs({})`
  border: solid 1px black;
`;

const StyledDivV4 = styled.div`
  border: solid 1px purple;
`;

const StyledDivV4WithAttrs = styled.div.attrs({
  className: 'class-from-attrs'
})`
  border: solid 1px purple;
`;

interface StyledDivProps {
  className?: string;
}

const StyledDivV4WithProps = styled.div.attrs<StyledDivProps>({
  className: 'class-from-attrs'
})`
  border: solid 1px purple;
`;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <StyledDivV4 className="test-class">
          This will emit a div with class="test-class"
        </StyledDivV4>
        {/* <StyledDivV4WithAttrs className="test-class">
          This will not compile. TS will throw an error
        </StyledDivV4WithAttrs> */}
        <StyledDivV4WithProps className="test-class">
          This will emit a div with class="test-class class-from-attrs"
        </StyledDivV4WithProps>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
