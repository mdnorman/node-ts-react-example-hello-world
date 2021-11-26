import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main';
import { BadRoute } from './pages/BadRoute';

export class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<BadRoute />} />
      </Routes>
    );
  }
}
