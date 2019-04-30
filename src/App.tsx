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
        {/* This will not work.  Link doesn't know about any button props */}
        {/* <Link as="button" disabled={false}>
          Link as Button with as prop in DOM
        </Link> */}
        <LinkAsButton disabled={true}>
          Link as Button with as prop in attrs
        </LinkAsButton>
      </div>
    );
  }
}

export default App;
