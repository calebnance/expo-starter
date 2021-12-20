import React from 'react';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';

// context
import Context from './index';

class AppState extends React.Component {
  constructor() {
    super();

    this.state = {
      theme: 'light'
    };

    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    this.checkLocalStorage();
  }

  async checkLocalStorage() {
    // get local storage
    const theme = JSON.parse(await AsyncStorage.getItem('theme')) || 'light';

    // update app state with any local storage
    this.setState({
      theme
    });
  }

  updateState(key, value) {
    this.setState({
      [key]: value
    });
  }

  render() {
    const { children } = this.props;

    // app state
    const { theme } = this.state;

    return (
      <Context.Provider
        value={{
          theme,
          updateState: this.updateState
        }}
      >
        {children}
      </Context.Provider>
    );
  }
}

AppState.propTypes = {
  // required
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default AppState;
