import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';

// context
import Context from './index';

function AppState({ children }) {
  const [theme, setTheme] = useState('light');

  // load theme from asyncstorage on mount
  useEffect(() => {
    const loadTheme = async () => {
      const storedTheme =
        JSON.parse(await AsyncStorage.getItem('theme')) || 'light';
      setTheme(storedTheme);
    };
    loadTheme();
  }, []);

  // updatestate function (stable reference)
  const updateState = useCallback((key, value) => {
    if (key === 'theme') {
      setTheme(value);
    }
    // add more keys if more state is added in the future
  }, []);

  // memoize context value to avoid unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      theme,
      updateState
    }),
    [theme, updateState]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

AppState.propTypes = {
  // required
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default AppState;
