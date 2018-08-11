import * as React from 'react';

import { Hello } from '../components/Hello';

export interface MainProps {}

export class Main extends React.Component<MainProps> {
  render() {
    return <Hello compiler="Typescript" framework="React" />;
  }
}
