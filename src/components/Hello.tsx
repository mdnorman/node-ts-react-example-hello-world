import * as React from 'react';

export interface HelloProps {
  compiler: string;
  framework: string;
}

export class Hello extends React.Component<HelloProps> {
  render() {
    console.log(`Printing hello with ${this.props.compiler} and ${this.props.framework}`);
    return (
      <h1>
        Hello from {this.props.compiler} and {this.props.framework}!
      </h1>
    );
  }
}
