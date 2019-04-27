import './App.css';

import * as React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Link from './Link';
import LinkAsButton from './LinkAsButton';
import LinkAsButtonDisabled from './LinkAsButtonDisabled';
import LinkWithAttrs from './LinkWithAttrs';
import RouterLink from './RouterLink';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Link className="test-1">Link</Link>
        <LinkWithAttrs className="test-2">Link with Attrs</LinkWithAttrs>
        <LinkAsButton className="test-3">Button</LinkAsButton>
        {/* This does not compile.  Errors with:
            Property 'disabled' does not exist on type 'IntrinsicAttributes & Pick<Pick<Pick<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>
        */}
        {/* <LinkAsButton disabled={true}>Disabled Button</LinkAsButton> */}
        <LinkAsButtonDisabled disabled={true}>
          Disabled Button
        </LinkAsButtonDisabled>
        <BrowserRouter>
          <RouterLink>Router Link</RouterLink>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
