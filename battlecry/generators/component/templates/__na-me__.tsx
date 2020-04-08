import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'md-__na-me__',
  styleUrl: '__na-me__.scss',
  shadow: true
})

export class __NaMe__ {


  @Prop() text: string;

  render() {
    return <div>Hello, World! I'm {this.text}</div>;
  }
}
