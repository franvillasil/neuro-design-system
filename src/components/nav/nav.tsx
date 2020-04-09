import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'md-nav',
  styleUrl: 'nav.scss',
  shadow: true
})

export class Nav {
  @Prop() theme: "light" | "dark" = "dark";

  getClass() {
    return `
    container ${this.theme} 
    `;
  }

  render() {
    return <Host>
      <nav class={this.getClass()}>
        <md-button theme={this.theme} icon="person-outline"></md-button>
        <md-button theme={this.theme} icon="document-text-outline"></md-button>
        <md-button theme={this.theme} icon="library-outline"></md-button>
        <md-button theme={this.theme} icon="share-outline"></md-button>
      </nav>
    </Host>;
  }
}
