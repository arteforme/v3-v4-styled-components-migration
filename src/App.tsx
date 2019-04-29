import './App.css';

import * as React from 'react';

import Link from './Link';
import LinkAsButton from './LinkAsButton';
import LinkWithCustomProps from './LinkWithCustomProps';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Link className="test-1" data-test="test" href="#">
          Link
        </Link>
        <LinkWithCustomProps className="test-2" prop1="10px" prop2={false}>
          Link with Custom Props
        </LinkWithCustomProps>
        <LinkWithCustomProps className="test-2" prop2={false}>
          Link with Custom Props
        </LinkWithCustomProps>
        <Link as="button">Link as Button with as prop in DOM</Link>
        <LinkAsButton>Link as Button with as prop in attrs</LinkAsButton>
      </div>
    );
  }
}

export default App;
