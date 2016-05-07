import React from 'react';
import Nav from 'shared/components/Nav';
import classNames from 'classnames';
import useSheet from 'react-jss';

const styles = {
  button: {
    padding: '1em'
  },
  'media (max-width: 200px)': {
    button: {
      width: '100%'
    }
  },
  primary: {
    background: 'green'
  },
  warning: {
    background: 'yellow'
  }
};

class App extends React.Component {
  render() {
    //const { classes } = this.props.sheet
    return (
      <div>
        <Nav />
        <h1>hello</h1>
      </div>
    )
  }
}

export default App;
