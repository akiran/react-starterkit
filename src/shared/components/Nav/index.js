import React from 'react';
import { Link } from 'react-router'

export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
      </div>
    )
  }
}
