import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'md-button',
  styleUrl: 'button.scss',
  shadow: true
})

export class Button {

  @Prop() theme: "light" | "dark" = "dark";
  @Prop() shadow: "inner" | "outer" = "outer";
  @Prop() size: "small" | "medium" | "large" = "medium";
  @Prop() circle: boolean = false;
  @Prop() icon;

  getClass() {
    return `
    container ${this.theme} ${this.shadow} ${this.size}
    ${this.circle ? "circle" : ""}
    `;
  }

  getIcon() {
    if (this.icon) return <ion-icon name={this.icon}></ion-icon>;
  }

  render() {
    return <button class={this.getClass()}>
      {this.getIcon()}

    </button>;
  }
}
