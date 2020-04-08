import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'md-box',
  styleUrl: 'box.scss',
  shadow: true
})

export class Box {

  @Prop() theme: "light" | "dark" = "dark";
  @Prop() shadow: "inner" | "outer" = "inner";
  @Prop() circle: boolean = false;

  getClass() {
    return `
    container ${this.theme} ${this.shadow}
    ${this.circle ? "circle" : ""}
    `;
  }

  render() {
    return <button class={this.getClass()}>
    </button>;
  }
}
