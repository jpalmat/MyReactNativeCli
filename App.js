/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import AppNavContainer from './src/navigations';
import Location from './src/screens/Location';

const App = () => {
  return (
    <Location />
  );
};

export default App;
