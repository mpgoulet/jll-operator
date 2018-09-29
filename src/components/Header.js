import React from "react";
import { Link } from "react-router-dom";

import "tachyons";
import "styling/semantic.less";

import { Button, Icon } from "semantic-ui-react";

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <div className="w-100 mw7">
        <h1 className="lh-title">
          <Icon name="home" /> jll-blackbox
        </h1>

        <p className="lh-copy">bb Beta v1a</p>

        <h3>Management Console</h3>

        <Button primary>Connectors</Button>
        <Button>Datasets</Button>
        <Button>Chains</Button>
        <Button>Apps</Button>
        <Button>Workers</Button>
      </div>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/roster">Roster</Link>
        </li>
        <li>
          <Link to="/schedule">Schedule</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
