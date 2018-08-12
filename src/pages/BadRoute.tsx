import * as React from 'react';

export interface BadRouteProps {}

export class BadRoute extends React.Component<BadRouteProps> {
  render() {
    return <div>We're sorry, but this page does not exist</div>;
  }
}
